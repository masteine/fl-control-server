import { DataTypes } from "sequelize";
import { sequelize } from "@database/sequelize";
const { STRING, INTEGER } = DataTypes;

export const ExerciseModel = sequelize.define("exercise", {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: { type: STRING, unique: true, allowNull: false }
});
