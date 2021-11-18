import { Schema, model } from "mongoose";
import { Enum_TipoObjectivo } from "../enum/enums";
import { ModeloProyecto } from "./Proyecto";


interface Objective {
  descripcion: string;
  tipo: Enum_TipoObjectivo;
  //proyecto: Schema.Types.ObjectId
}

const EsquemaObjectivo = new Schema<Objective>({
  descripcion: {
    type: String,
    require: true,
  },
  tipo: {
    type: String,
    enum: Enum_TipoObjectivo,
    require: true,
  },
  // proyecto: {
  //   type: Schema.Types.ObjectId,
  //   ref: ModeloProyecto,
  //   required: true
  // }
});
const ModeloObjectivo = model("Objectivo", EsquemaObjectivo);

export { ModeloObjectivo };