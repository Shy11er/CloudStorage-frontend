import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import LoginForm from "@/components/auth/LoginForm";
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
              children: <h1>asd</h1>,
            },
          ]}
        />
      </main>
    </>
  );
};

export default AuthPage;
