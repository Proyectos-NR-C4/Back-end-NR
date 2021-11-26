import { Schema, model } from 'mongoose';
import { Enum_TipoObjetivo, Enum_FaseProyecto, Enum_EstatusProyecto } from '../enums/enums';
import {UserModel} from '../usuario/usuario';

 
interface Project {
  nombre: string;
  presupuesto: number;
  fechaInicio: Date;
  fechaFin: Date;
  estado: Enum_EstatusProyecto;
  fase: Enum_FaseProyecto;
  lider: Schema.Types.ObjectId;
  objetivos: [{descripcion: String, tipo: Enum_TipoObjetivo}]
  
}

//Mongoose
const projectSchema = new Schema(
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
      enum: ['ACTIVO', 'INACTIVO'],
      default: 'INACTIVO',
    },
    fase: {
      type: String,
      enum: ['INICIADO', 'DESARROLLO', 'TERMINADO', 'NULO'],
      default: 'NULO',
    },
    lider: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: UserModel,
    },
    objetivos: [
      {
        descripcion: {
          type: String,
          required: true,
        },
        tipo: {
          type: String,
          enum: ['GENERAL', 'ESPECIFICO'],
          required: true,
        },
      },
    ],
  },
  
);



const ProjectModel = model('Proyecto', projectSchema);

export { ProjectModel };