const { Sequelize } = require("sequelize");

export const sequelize = new Sequelize("fl_control_db", "postgres", "root", {
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  dialect: "postgres",
  host: "localhost",
  port: 5432
});
