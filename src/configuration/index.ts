const port = process.env.PORT || 3001;
const host = process.env.HOST || "localhost";
const sessionSecret = process.env.SESSION_SECRET || "life-activity-session-secret-key"; // prettier-ignore
const secretKey = process.env.SECRET_KEY || "lifeActivity node js";

export { port, host, sessionSecret, secretKey };
