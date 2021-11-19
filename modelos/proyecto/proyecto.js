import mongoose from "mongoose";
//import { ModeloObjectivo } from "../objetivo.js";
import { ModeloUsuario } from "../usuario/usuario.js";

const { Schema, model } = mongoose;

const proyectoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    presupuesto: {
      type: Number,
      required: true,
    },
    fechaInicio: {
      type: Date,
      required: true,
    },
    fechaFin: {
      type: Date,
      required: true,
    },
    estado: {
      type: String,
      enum: ["ACTIVO", "INACTIVO"],
      default: "INACTIVO",
    },
    fase: {
      type: String,
      enum: ["INICIADO", "DESARROLLO", "TERMINADO", "NULO"],
      default: "NULO",
    },
    lider: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: ModeloUsuario,
    },
    objetivos: [
      {
        descripcion: {
          type: String,
          required: true,
        },
        tipo: {
          type: String,
          enum: ["GENERAL", "ESPECIFICO"],
          required: true,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true }, 
    toObject: { virtuals: true }, 
  }
);

proyectoSchema.virtual("avances", {
  ref: "Avance",
  localField: "_id",
  foreignField: "proyecto",
});

proyectoSchema.virtual("inscripciones", {
  ref: "Inscripcion",
  localField: "_id",
  foreignField: "proyecto",
});

const ModeloProyecto = model("Proyecto", proyectoSchema);

export { ModeloProyecto };
