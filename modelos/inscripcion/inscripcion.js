import mongoose from "mongoose";
import { ModeloProyecto } from "../proyecto/proyecto.js";
import { ModeloUsuario } from "../usuario/usuario.js";

const { Schema, model } = mongoose;

const inscriptionSchema = new Schema({
  estado: {
    type: String,
    enum: ["ACEPTADO", "RECHAZADO", "PENDIENTE"],
    default: "PENDIENTE",
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: false,
  },
  fechaEgreso: {
    type: Date,
    required: false,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ModeloProyecto,
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: ModeloUsuario,
    required: true,
  },
});

const ModeloInscripcion = model("Inscripcion", inscriptionSchema);

export { ModeloInscripcion };
