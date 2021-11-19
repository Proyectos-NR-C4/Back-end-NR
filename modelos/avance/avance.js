import mongoose from "mongoose";
import { ModeloProyecto } from "../proyecto/proyecto.js";
import { ModeloUsuario } from "../usuario/usuario.js";

const { Schema, model } = mongoose;

const avanceSchema = new Schema({
  fecha: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: [
    {
      type: String,
    },
  ],
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ModeloProyecto,
    required: true,
  },
  creadoPor: {
    type: Schema.Types.ObjectId,
    ref: ModeloUsuario,
    required: true,
  },
});

const ModeloAvance = model("Avance", avanceSchema);

export { ModeloAvance };