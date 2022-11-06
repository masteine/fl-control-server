import { DataTypes } from "sequelize";
import { sequelize } from "@database/sequelize";
const { STRING, INTEGER } = DataTypes;

export const User = sequelize.define("User", {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  username: { type: STRING, unique: true },
  email: { type: STRING, unique: true, allowNull: false },
  password: { type: STRING },
  first_name: { type: STRING },
  last_name: { type: STRING },
  role: { type: STRING, defaultValue: "user" }
  // condition_id int [ref: > conditions.id]
  // role_id id [ref: - roles.id]
  // medical_tests_id int [ref: > medical_tests.id]
  // meals_id int [ref: > meals.id]
  // pills_id int [ref: > pills.id]
});
