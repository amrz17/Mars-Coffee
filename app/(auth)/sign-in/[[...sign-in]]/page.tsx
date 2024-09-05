import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <main className="flex h-svh justify-center items-center">
      <SignIn />
    </main>
  );
};

export default SignInPage;
