import { User } from "@/api/dto/auth.dto";
import { GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import styles from "@/styles/Profile.module.scss";
import { Button } from "antd";
import { checkAuth } from "@/utils/checkAuth";
import * as Api from "@/api";
import { Layout } from "@/layouts/Layout";
import DashboardPage from "@/pages/dashboard/index";

interface Props {
  userData: User;
}

const Profile: NextPage<Props> = ({ userData }) => {
  const onClickLogout = () => {
    if (confirm("Are you sure to logout?")) {
      Api.auth.logout();
      location.href = "/";
    }
  };

  return (
    <main>
      <div className={styles.root}>
        <h1>My profile</h1>
        <br />
        <p>
          ID: <b>{userData.id}</b>
        </p>
        <p>
          FullName: <b>{userData.fullName}</b>
        </p>
        <p>
          E-Mail: <b>{userData.email}</b>
        </p>
        <br />
        <Button type="primary" danger onClick={onClickLogout}>
          Log Out
        </Button>
      </div>
    </main>
  );
};

Profile.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard | Profile">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  const userData = await Api.auth.getMe();

  return {
    props: {
      userData,
    },
  };
};

export default Profile;
