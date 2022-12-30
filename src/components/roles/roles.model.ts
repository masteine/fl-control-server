import { DataTypes } from "sequelize";
import { sequelize } from "@database/sequelize";
const { STRING, INTEGER } = DataTypes;

export const RolesModel = sequelize.define("role", {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: STRING,
    unique: true,
    allowNull: false
  },
  permission_level: {
    type: INTEGER,
    allowNull: false
  }
});
