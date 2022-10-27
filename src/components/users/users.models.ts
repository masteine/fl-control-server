import { DataTypes } from "sequelize";
import { sequelize } from "../../database/sequelize";
const { UUID, STRING } = DataTypes;

export const User = sequelize.define("User", {
  id: { type: UUID, primaryKey: true, allowNull: false },
  username: { type: STRING, unique: true },
  email: { type: STRING, unique: true, allowNull: false },
  password: { type: STRING },
  first_name: { type: STRING, allowNull: false },
  last_name: { type: STRING, allowNull: false },
  role: { type: STRING, defaultValue: "user" }
  //   condition_id int [ref: > conditions.id]
  // role_id id [ref: - roles.id]
  // medical_tests_id int [ref: > medical_tests.id]
  // meals_id int [ref: > meals.id]
  // pills_id int [ref: > pills.id]
});