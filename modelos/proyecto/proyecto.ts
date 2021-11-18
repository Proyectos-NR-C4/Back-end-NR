import { Schema, model } from "mongoose";
import {
  Enum_EstadoProyecto,
  Enum_FaseProyecto,
  Enum_TipoObjectivo,
} from "../enum/enums";
import { ModeloUsuario } from "../usuario/usuario";

//TypeScript
interface Proyecto {
  nombre: string;
  presupuesto: number;
  fechaInicio: Date;
  fechaFinal: Date;
  estado: Enum_EstadoProyecto;
  fase: Enum_FaseProyecto;
  lider: Schema.Types.ObjectId;
  objetivos: [{ descripcion: String; tipo: Enum_TipoObjectivo }];
}

//Mongoose
const EsquemaProyecto = new Schema<Proyecto>({
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
  fechaFinal: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    enum: Enum_EstadoProyecto,
    default: Enum_EstadoProyecto.INACTIVO,
  },
  fase: {
    type: String,
    enum: Enum_FaseProyecto,
    default: Enum_FaseProyecto.NULL,
  },
  lider: {
    type: Schema.Types.ObjectId,
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
        enum: Enum_TipoObjectivo,
        required: true,
      },
    },
  ],
});

const ModeloProyecto = model("Proyecto", EsquemaProyecto);

export { ModeloProyecto };
