import { DataTypes } from "sequelize";
import { sequelize } from "@database/sequelize";
const { TEXT, INTEGER, DATE } = DataTypes;

export const TrainingsModel = sequelize.define("training", {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  date: {
    type: DATE
  },
  description: {
    type: TEXT
  }
});
