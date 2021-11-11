import { Schema, model } from 'mongoose';
import { Enum_ProjectPhase, Enum_ProjectStatus } from './enums';
import {UserModel} from './user';
import {ObjectiveModel} from './objective'


  //TypeScript
interface Project {
  nombre: string;
  presupuesto: number;
  fechaInicio: Date;
  fechaFinal: Date;
  estado: Enum_ProjectStatus;
  fase: Enum_ProjectPhase;
  lider: Schema.Types.ObjectId;
  //objetivos: [Schema.Types.ObjectId]
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
    enum: Enum_ProjectStatus,
    default: Enum_ProjectStatus.inactivo,
  },
  fase: {
    type: String,
    enum: Enum_ProjectPhase,
    default: Enum_ProjectPhase.null,
  },
  lider: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
  },
  // objetivos: [
  //     {
  //       type: Schema.Types.ObjectId,
  //     ref: ObjectiveModel
  //   }
  // ]
});

const ProjectModel = model('Project', ProjectSchema);

export {ProjectModel};
