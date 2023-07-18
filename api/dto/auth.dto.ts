export interface loginFormDto {
  email: string;
  password: string;
}

export type registerFormDto = loginFormDto & { fullName: string };

export interface loginResponseDto {
  _token: string;
}

export type registerResponceDto = loginResponseDto;
