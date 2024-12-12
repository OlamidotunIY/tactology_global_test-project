"use client"

import { RegisterForm } from "@/components/register-form";


const Register = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <RegisterForm />
    </div>
  );
};

export default Register;


// const TEST_QUERY = gql`
//   query Test {
//     __typename
//   }
// `;

// function TestComponent() {
//   const { loading, error, data } = useQuery(TEST_QUERY);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return <p>Connected! {JSON.stringify(data)}</p>;
// }

// export default TestComponent;