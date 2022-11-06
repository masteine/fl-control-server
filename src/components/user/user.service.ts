import { User as UserModel } from "./user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { secretKey } from "../../configuration";
import { CreateUserDto, LoginUserPayload } from "@components/user/user.dto";

export const UserService = {
  createNewUser: async ({
    email,
    password,
    ...props
  }: CreateUserDto): Promise<any> => {
    try {
      const hashedPassword: string = await bcrypt.hashSync(password, 12);
      let newUser = await UserModel.create({
        email,
        password: hashedPassword,
        ...props
      });
      delete newUser.dataValues.password;
      const userDataWithoutPass: any = newUser.dataValues;
      return {
        message: "Account has been created successfully.",
        data: userDataWithoutPass
      };
    } catch (e) {
      return {
        message: `${e}`
      };
    }
  },
  loginUser: async ({ email, password }: LoginUserPayload): Promise<any> => {
    if (!email) {
      return { data: null, message: "Please, fill email." };
    }
    let currentUser: any = await UserModel.findOne({ where: { email } });

    const wrongAuthText: string = "Wrong password or email.";

    if (currentUser === null) {
      return { data: null, message: wrongAuthText };
    }

    const validationPassword = await bcrypt.compareSync(
      password,
      currentUser.password
    );

    if (!validationPassword) {
      return { data: null, message: wrongAuthText };
    }

    const token = (id: string = currentUser.id, roles: string = "user") => {
      const payload = { id, roles };
      return jwt.sign(payload, secretKey, { expiresIn: "24h" });
    };

    delete currentUser.dataValues.password;
    const updatedUser = currentUser.dataValues;

    return {
      data: { ...updatedUser, token: token() },
      message: "Login is successfully."
    };
  },
  getUsers: async () => {
    return await UserModel.findAll({
      attributes: ["id", "email", "first_name", "second_name", "role"]
    });
  },
  /**
   * Edit user by :id
   * @param session
   * @param id
   * @param body
   * @returns
   */
  editUser: async (
    session: any,
    id: string | string[],
    body: any
  ): Promise<any> => {
    if (session.user_id !== id) return { message: "incorrect user_id" };

    const { first_name, second_name } = body;
    const updatedUser = await UserModel.update(
      { first_name, second_name },
      {
        where: {
          id
        },
        returning: true,
        plain: true
      }
    );

    delete updatedUser[1]?.dataValues.password;

    return {
      message: "User updated is successfully.",
      data: updatedUser[1]?.dataValues
      // temp: {
      //   id,
      //   session,
      //   body
      // }
    };
  },
  /**
   * Find user by email
   * @param email
   * @returns
   */
  findUserByEmail: async (email: string) => {
    try {
      const user: any = await UserModel.findOne({ where: { email } });

      if (user) {
        return { message: "User with current email exists.", data: user };
      }

      return {
        message: "User doesn't exists.",
        data: null
      };
    } catch (e) {
      return {
        message: `${e}`
      };
    }
  }
};
