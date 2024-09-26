import { Model, DataTypes } from "sequelize";
import { Datastore } from "../integrations/datastore.js";

const db = await Datastore.getSequelize();

export default class BaseModel extends Model {}
BaseModel.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at",
    },
  },
  {
    sequelize: db,
    timestamps: false,
    underscored: true,
    modelName: "BaseModel",
  }
);
