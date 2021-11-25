import { Schema, model } from "mongoose";
import {
  Enum_RolUsuario,
  Enum_EstatusUsuario,
  Enum_EstatusSubscripcion,
  Enum_EstatusProyecto,
  Enum_FaseProyecto,
  Enum_TipoObjetivo,
  Enum_EstatusInscription,
} from "./enums";

// const Customer = require('./customer');

export interface User {
  nombre: string;
  apellido: string;
  correo: string;
  documento: string;
  rol: Enum_RolUsuario;
  estatus: Enum_EstatusUsuario;
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
    enum: Enum_RolUsuario,
  },
  estatus: {
    type: String,
    required: true,
    enum: Enum_EstatusUsuario,
    default: Enum_EstatusUsuario.PENDIENTE,
  },
});

const UserModel = model("Usuario", UserSchema);

export { UserModel };
