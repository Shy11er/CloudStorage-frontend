import { GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import { checkAuth } from "@/utils/checkAuth";
import Header from "@/components/header/Header";
import "@/styles/globals.css";

type Props = {};

const DashboardPage: NextPage = (props: Props) => {
  return (
    <main>
      <Header />
      <h2>Dashboard Private</h2>
    </main>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  return {
    props: {},
  };
};

export default DashboardPage;
