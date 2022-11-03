import jwt from "jsonwebtoken";
import { secretKey } from "../configuration";

export function authMiddleware(roles = false) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      const token = req.headers.authorization.split(" ")[1];
      // console.log({ token });
      // console.log({
      //   session: req.session
      // });

      if (!token) {
        return res
          .status(401)
          .json({ message: "User hasn't been authorized." });
      }

      if (token !== req.session.token) {
        return res
          .status(401)
          .json({ data: null, message: "Credentials error." });
      }
      // const { roles: userRoles } = jwt.verify(token, secretKey);
      // let hasRole = false;
      // userRoles.forEach((role) => {
      //   if (roles.includes(role)) {
      //     hasRole = true;
      //   }
      // });
      req.user = jwt.verify(token, secretKey);

      next();
    } catch (e) {
      return res
        .status(401)
        .json({ data: null, message: "Credentials error." });
    }
  };
}
