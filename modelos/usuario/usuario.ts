import { Schema, model } from "mongoose";
import { Enum_RolUsuario, Enum_EstadoUsuario } from "../enum/enums";

// const Customer = require('./customer');

export interface Usuario {
  nombre: string;
  apellido: string;
  correo: string;
  documento: string;
  rol: Enum_RolUsuario;
  estado: Enum_EstadoUsuario;
}

const EsquemaUsuario = new Schema<Usuario>({
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
  estado: {
    type: String,
    enum: Enum_EstadoUsuario,
    default: Enum_EstadoUsuario.PENDIENTE,
  },
});

const ModeloUsuario = model("Usuario", EsquemaUsuario);

export { ModeloUsuario };
