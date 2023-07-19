import axios from "@/core/axios";
import {
  User,
  loginFormDto,
  loginResponseDto,
  registerFormDto,
  registerResponceDto,
} from "./dto/auth.dto";
import { destroyCookie } from "nookies";

export const login = async (val: loginFormDto): Promise<loginResponseDto> => {
  const { data } = await axios.post("/auth/login", val);

  return data;
};

export const register = async (
  val: registerFormDto
): Promise<registerResponceDto> => {
  const { data } = await axios.post("/auth/register", val);

  return data;
};

export const getMe = async (): Promise<User> => {
  const { data } = await axios.get("/users/me");

  return data;
};

export const logout = () => {
  destroyCookie(null, "_token", { path: "/" });
};
