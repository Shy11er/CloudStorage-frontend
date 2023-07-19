import React from "react";
import styles from "./LoginForm.module.scss";
import { Form, Input, Button, notification } from "antd";
import { loginFormDto } from "@/api/dto/auth.dto";
import * as Api from "@/api";
import { setCookie } from "nookies";

type Props = {};

const LoginForm = (props: Props) => {
  const onSubmit = async (obj: loginFormDto) => {
    try {
      const { _token } = await Api.auth.login(obj);

      notification.success({
        message: "Successful!",
        description: "Redirecting to the admin panel...",
        duration: 2,
      });

      setCookie(null, "_token", _token, {
        path: "/",
      });

      location.href = "/dashboard";
    } catch (err) {
      console.warn("LoginForm ", err);

      notification.error({
        message: "Ошибка!",
        description: "Неверный логин или пароль",
        duration: 2,
      });
    }
  };

  return (
    <div className={styles.formBlock}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          label="E-Mail"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
