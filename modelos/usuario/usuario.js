import mongoose from 'mongoose';

const { Schema, model } = mongoose;
// import {
//   Enum_RolUsuario,
//   Enum_EstatusUsuario,
//   Enum_EstatusSubscripcion,
//   Enum_EstatusProyecto,
//   Enum_FaseProyecto,
//   Enum_TipoObjetivo,
//   Enum_EstatusInscription,
// } from "../enums/enums.js";



//export interface User {
  //nombre: string;
  //apellido: string;
  //correo: string;
  //documento: string;
  //rol: Enum_RolUsuario;
  //estatus: Enum_EstatusUsuario;
//}

const UserSchema = new Schema(
  {
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
    enum: ['ESTUDIANTE', 'LIDER', 'ADMINISTRADOR'],
  },
  estatus: {
    type: String,
    required: true,
    enum: ['PENDIENTE', 'AUTORIZADO', 'NO_AUTORIZADO'],
    default: 'PENDIENTE',
  },
});

const UserModel = model("Usuario", UserSchema);

export { UserModel };
