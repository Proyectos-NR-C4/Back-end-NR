import { Schema, model } from 'mongoose';
import { Enum_ObjectiveType, Enum_ProjectPhase, Enum_ProjectStatus } from './enums';
import { ProjectModel } from './project';
//import {UserModel} from './user';

interface Objective {
    descripcion: string
    tipo: Enum_ObjectiveType
    //proyecto: Schema.Types.ObjectId
}


const ObjectiveSchema = new Schema<Objective>({
        descripcion: {
            type: String,
            require: true,
        },
        tipo: {
            type: String,
            enum: Enum_ObjectiveType,
            require: true
        },
        // proyecto: {
        //     type: Schema.Types.ObjectId,
        //     ref: ProjectModel
        // }
    }
)
const ObjectiveModel = model('Object', ObjectiveSchema)

export {ObjectiveModel}