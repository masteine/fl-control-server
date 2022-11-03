import { DataTypes } from "sequelize";
import { sequelize } from "../../database/sequelize";
const { STRING, INTEGER, DATE } = DataTypes;

export const Conditions = sequelize.define("Conditions", {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  weight: {
    type: INTEGER
  },
  height: {
    type: INTEGER
  },
  measurement_date: {
    type: DATE,
    allowNull: false
  }
});
