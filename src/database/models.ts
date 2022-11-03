import { UserModel } from "../components/user";
import { ConditionsModel } from "../components/condition";

UserModel.hasOne(ConditionsModel);
ConditionsModel.hasOne(UserModel);

export const Models = {
  UserModel,
  ConditionsModel
};
