import { GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import { checkAuth } from "@/utils/checkAuth";
import "@/styles/globals.css";
import { Layout } from "@/layouts/Layout";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { FileItem } from "@/api/dto/file.dto";
import * as Api from "@/api";
import { Files } from "@/modules/Files";

type Props = {
  items: FileItem[];
};

const DashboardPage: NextPage<Props> = ({ items }) => {
  return (
    <DashboardLayout>
       <Files items={items} withActions />
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

  try {
    const files = await Api.file.getAll("photos");

    return {
      props: {
        items: files,
      },
    };
  } catch (err) {
    console.log(err);
    return { props: { items: [] } };
  }
};

export default DashboardPage;
