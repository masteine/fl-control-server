import { DataTypes } from "sequelize";
import { sequelize } from "@database/sequelize";

const { STRING, INTEGER, TEXT } = DataTypes;

export const TrainingExercisesModel = sequelize.define("training_exercises", {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  level: {
    type: STRING
  },
  sets: {
    type: INTEGER,
    allowNull: false
  },
  reps: {
    type: INTEGER,
    allowNull: false
  },
  description: {
    type: TEXT
  }
});
