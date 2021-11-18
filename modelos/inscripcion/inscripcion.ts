import { Schema, model } from "mongoose";
import { Enum_EstadoInscripcion } from "../enum/enums";
import { ModeloProyecto } from "../proyecto/proyecto";
import { ModeloUsuario } from "../usuario/usuario";

interface Inscription {
  estado: Enum_EstadoInscripcion;
  fechaIngreso: Date;
  fechaEgreso: Date;
  proyecto: Schema.Types.ObjectId;
  estudiante: Schema.Types.ObjectId;
}

const EsquemaInscripcion = new Schema<Inscription>({
  estado: {
    type: String,
    enum: Enum_EstadoInscripcion,
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: true,
  },
  fechaEgreso: {
    type: Date,
    required: true,
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

const ModeloInscripcion = model("Inscripcion", EsquemaInscripcion);

export { ModeloInscripcion };
