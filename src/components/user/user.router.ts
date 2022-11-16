import { Router } from "express";
import { UserController } from "./user.controller";
import { body, check } from "express-validator";
import { authMiddleware } from "../../middlewares/authMiddleware";
const router = Router();

const { register, login, refreshToken } = UserController;

const AUTH_URL: string = "/api/auth";

export const UserRouter = router
  .post(
    `${AUTH_URL}/register`,
    [
      body("email").isEmail().notEmpty(),
      body("password").isLength({ min: 8, max: 24 }).notEmpty()
    ],
    register
  )
  .post(
    `${AUTH_URL}/login`,
    [
      body("email").isEmail().notEmpty(),
      body("password").isLength({ min: 8, max: 24 }).notEmpty()
    ],
    login
  )
  .post(`${AUTH_URL}/refreshToken`, [], refreshToken);
// .get(`${authBaseApiUrl}/logout`, authMiddleware(), logout)
// .get(`${authBaseApiUrl}/users`, authMiddleware(), getUsers)
// .put(
//   `${authBaseApiUrl}/user`,
//   [authMiddleware(), check(["first_name", "second_name"]).notEmpty()],
//   editUser
// );
