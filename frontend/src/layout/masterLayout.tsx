"use client";

import { client } from "@/apolloClient";
import { ApolloProvider } from "@apollo/client";

export default function MasterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
