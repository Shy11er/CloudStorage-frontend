import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";
import { Tabs } from "antd";
import "@/styles/globals.css";

type Props = {};

const AuthPage: NextPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Dashboard / Auth</title>
      </Head>
      <main style={{ width: 400, margin: "50px auto" }}>
        <Tabs
          items={[
            {
              label: "Sign In",
              key: "1",
              children: <LoginForm />,
            },
            {
              label: "Sign Up",
              key: "2",
              children: <RegisterForm />,
            },
          ]}
        />
      </main>
    </>
  );
};

export default AuthPage;
