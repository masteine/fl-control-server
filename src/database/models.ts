import { UserModel } from "@components/user";
import { ConditionsModel } from "@components/condition";
import { ExerciseModel } from "@components/exercises";
import { RolesModel } from "@components/roles";
import { TrainingsModel } from "@components/trainings";
import { TrainingExercisesModel } from "@components/trainingExercises/trainingExercises.model";

UserModel.hasOne(ConditionsModel);
ConditionsModel.belongsTo(UserModel);

UserModel.hasOne(RolesModel);
RolesModel.belongsTo(RolesModel);

UserModel.hasMany(TrainingsModel);
TrainingsModel.belongsTo(UserModel);

TrainingsModel.hasMany(TrainingExercisesModel);
TrainingExercisesModel.belongsTo(TrainingsModel);

TrainingExercisesModel.hasOne(ExerciseModel);
ExerciseModel.belongsTo(TrainingExercisesModel);

export const Models = {
  UserModel,
  ConditionsModel,
  ExerciseModel,
  RolesModel,
  TrainingsModel,
  TrainingExercisesModel
};
