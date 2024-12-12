import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  gql,
  Observable,
  createHttpLink,
  split,
  ApolloLink,
} from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { useUserStore } from "./stores/userStore";
import { onError } from "@apollo/client/link/error";
import { GraphQLError } from "graphql";

loadErrorMessages();
loadDevMessages();

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  credentials: 'include',
  headers: {
    "Content-Type": "application/json",
  },
});

async function refreshToken(client: ApolloClient<NormalizedCacheObject>) {
  try {
    const { data } = await client.mutate({
      mutation: gql`
        mutation RefreshToken {
          refreshToken
        }
      `,
    })
    const newAccessToken = data?.refreshToken
    if (!newAccessToken) {
      throw new Error("New access token not received.")
    }
    return `Bearer ${newAccessToken}`
  } catch (err) {
    throw new Error("Error getting new access token.")
  }
}

let retryCount = 0;
const maxRetry = 3;

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  for (const err of graphQLErrors as GraphQLError[]) {
    if (err?.extensions?.code === "UNAUTHENTICATED" && retryCount < maxRetry) {
      console.log("UNAUTHENTICATED error received. Retrying...");
      retryCount++;
      return new Observable((observer) => {
        refreshToken(client)
          .then((token) => {
            console.log("token", token);
            operation.setContext((previousContext: any) => ({
              headers: {
                ...previousContext.headers,
                authorization: token,
              },
            }));
            const forward$ = forward(operation);
            forward$.subscribe(observer);
          })
          .catch((error) => {
            console.log(error);
            observer.error(error);
          });
      });
    }

    if (err.message === "Refresh token not found") {
      console.log("refresh token not found!");
      useUserStore.setState({
        id: undefined,
        fullname: "",
        email: "",
      });
    }
  }
});


export const client = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache({}),
  credentials: 'include',
});
