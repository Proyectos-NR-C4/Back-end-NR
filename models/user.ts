import { Schema, model } from "mongoose";
import { Enum_UserRole, Enum_UserStatus } from "./enums";

// const Customer = require('./customer');

export interface User {
  nombre: string;
  apellido: string;
  correo: string;
  documento: string;
  rol: Enum_UserRole;
  estatus: Enum_UserStatus;
}

const UserSchema = new Schema<User>({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (correo) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo);
        //   },
        // validator: async (correo) => {
        //   if (!(correo.includes('@') && correo.includes('.'))) {
        //     return false;
        //   }
      },
      message: "Por favor ingrese un correo válido",
    },
  },
  documento: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
    enum: Enum_UserRole,
  },
  estatus: {
    type: String,
    required: true,
    enum: Enum_UserStatus,
    default: Enum_UserStatus.pendiente,
  },
});

const UserModel = model("User", UserSchema);

export { UserModel };
