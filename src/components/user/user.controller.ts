import { validationResult } from "express-validator";
import { Request, Response } from "express";
import { UserService } from "./user.service";

export const UserController = {
  register: async (req: Request, res: Response): Promise<any> => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(403).json({ data: null, message: errors.array() });
      }
      const user = await UserService.findUserByEmail(req.body.email);
      if (user.data) {
        return res.status(400).json({
          message: user.message,
          data: null
        });
      }
      const result = await UserService.createNewUser(req.body);

      return res.status(200).json(result);
    } catch (e) {
      return res.json({ message: `${e}`, data: null });
    }
  },
  login: async (req: Request, res: Response): Promise<any> => {
    try {
      const result = await UserService.loginUser(req.body);

      if (!result.data) {
        return res.status(403).json(result);
      }

      req.body.email = result.data.email;
      req.body.user_id = result.data.id;
      req.body.token = result.data.token;

      return res.status(200).json(result);
    } catch (e) {
      return res.json({ message: `${e}`, data: null });
    }
  }
  // async logout(req, res: Response): Promise<any> {
  //   req.session.destroy(() =>
  //     res.status(200).json({ message: "Logout is successfully." })
  //   );
  // }
  // async getUsers(req, res) {
  //   try {
  //     const users = await UserServices.getUsers();
  //
  //     return res.json({ data: users });
  //   } catch (e) {
  //     return res.json({ message: `${e}`, data: {} });
  //   }
  // }
  // async editUser(req, res: Response): Promise<any> {
  //   const errors = validationResult(req).formatWith(errorFormatter);
  //
  //   if (!errors.isEmpty()) {
  //     return res.status(403).json({ data: null, message: errors.array()[0] });
  //   }
  //
  //   // if(!req?.session) {
  //   //   return false
  //   // }
  //
  //   try {
  //     const updatedUser = await UserServices.editUser(
  //       req.session,
  //       req.query.id as string,
  //       req.body
  //     );
  //     console.log(updatedUser);
  //     if (!updatedUser.data) return res.status(400).json(updatedUser);
  //     res.status(200).json(updatedUser);
  //   } catch (e) {
  //     return res.status(500).json({ message: `${e}` });
  //   }
  // }
};
