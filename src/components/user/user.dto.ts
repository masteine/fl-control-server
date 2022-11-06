export type UserDto = {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
};

export type CreateUserDto = UserDto;

export type LoginUserPayload = Pick<UserDto, "email" | "password">;
