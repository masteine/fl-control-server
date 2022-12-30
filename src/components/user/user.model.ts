import { DataTypes } from "sequelize";
import { sequelize } from "@database/sequelize";
const { STRING, INTEGER } = DataTypes;

export const UserModel = sequelize.define("user", {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  username: { type: STRING, unique: true },
  email: { type: STRING, unique: true, allowNull: false },
  password: { type: STRING, allowNull: false },
  first_name: { type: STRING },
  last_name: { type: STRING }
});
