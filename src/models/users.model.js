import { Model, DataTypes } from "sequelize";
import { Datastore } from "../integrations/datastore.js";

const db = await Datastore.getSequelize();

export default class UsersModel extends Model {}
UsersModel.init(
  {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
      field: "email",
    },
    password:{
        type: DataTypes.STRING,
        field: "password",

    }
  },
  {
    sequelize: db,
    createdAt: "created_at",
    updatedAt: "updated_at",
    modelName: "Users",
    tableName: "users",
  }
);
