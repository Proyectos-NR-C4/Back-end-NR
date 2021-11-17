import { Schema, model } from 'mongoose';
import { Enum_TipoObjectivo, Enum_FaseProjecto, Enum_EstatusProjecto } from './enums';
import {UserModel} from './usuario';

 
interface Project {
  nombre: string;
  presupuesto: number;
  fechaInicio: Date;
  fechaFinal: Date;
  estado: Enum_EstatusProjecto;
  fase: Enum_FaseProjecto;
  lider: Schema.Types.ObjectId;
  objetivos: [{descripcion: String, tipo: Enum_TipoObjectivo}]
}

//Mongoose
const ProjectSchema = new Schema<Project>({
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
    enum: Enum_EstatusProjecto,
    default: Enum_EstatusProjecto.INACTIVO,
  },
  fase: {
    type: String,
    enum: Enum_FaseProjecto,
    default: Enum_FaseProjecto.NULL,
  },
  lider: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
  },
  objetivos: [{
    descripcion: {
      type: String,
      required: true
    }, 
    tipo: {
      type: String,
      enum: Enum_TipoObjectivo,
      required: true,
    }
  }]
});

const ProjectModel = model('Projecto', ProjectSchema);

export {ProjectModel};
