import { GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import { checkAuth } from "@/utils/checkAuth";
import Header from "@/components/header/Header";
import "@/styles/globals.css";
import { Layout } from "@/layouts/Layout";
import { DashboardLayout } from "@/layouts/DashboardLayout";

type Props = {};

const DashboardPage: NextPage = (props: Props) => {
  return (
    <DashboardLayout>
      {/* <Files items={items} withActions /> */}
    </DashboardLayout>
  );
};

DashboardPage.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard | Main">{page}</Layout>;
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
