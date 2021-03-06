import mongoose from "mongoose";

const { Schema, model } = mongoose;

const esquemaUsuario = new Schema({
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
      },
      message: "Por favor ingrese un correo válido",
    },
  },
  password: {
    type: String,
    required: true
  },
  identificacion: {
    type: String,
    required: true,
    unique: true,
  },
  rol: {
    type: String,
    required: true,
    enum: ["ESTUDIANTE", "LIDER", "ADMINISTRADOR"],
  },
  estado: {
    type: String,
    enum: ["PENDIENTE", "AUTORIZADO", "NO_AUTORIZADO"],
    default: "PENDIENTE",
  },
});

esquemaUsuario.virtual('proyectosLiderados', {
  ref: 'Proyecto',
  localField: '_id',
  foreignField: 'lider',
});

esquemaUsuario.virtual('avancesCreados', {
  ref: 'Avance',
  localField: '_id',
  foreignField: 'creadoPor',
});

esquemaUsuario.virtual('inscripciones', {
  ref: 'Inscripcion',
  localField: '_id',
  foreignField: 'estudiante',
});
const ModeloUsuario = model("Usuario", esquemaUsuario);

export { ModeloUsuario };