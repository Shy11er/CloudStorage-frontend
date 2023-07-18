import axios from "@/core/axios";
import {
  loginFormDto,
  loginResponseDto,
  registerFormDto,
  registerResponceDto,
} from "./dto/auth.dto";

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
