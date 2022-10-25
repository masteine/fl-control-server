// import { sessionSecret } from "../configuration";
// import { redisClient, RedisStore } from "./redis";

const sessionSetup = {
  // store: new RedisStore({ client: redisClient }),
  // secret: sessionSecret,
  // resave: false,
  // saveInitialized: false,
  // cookie: {
  //   maxAge: 1000 * 60 * 60 * 30,
  //   secure: false,
  //   httpOnly: true,
  //   sameSite: "lax" as "lax"
  // }
};

export default sessionSetup;
