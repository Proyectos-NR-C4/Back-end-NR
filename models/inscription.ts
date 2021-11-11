import { Schema, model } from "mongoose";
import { UserModel } from "./user";
import { ProjectModel } from "./project";
import { Enum_InscriptionStatus } from "./enums";

interface Inscripcion {
    fechIngreso: Date
    fechaEgreso: Date
    estado: Enum_InscriptionStatus
    proyecto: Schema.Types.ObjectId
    estudiante: Schema.Types.ObjectId
}

const InscriptionSchema = new Schema<Inscripcion>({
    fechIngreso: {
        type: Date,
        required: true
    },
    fechaEgreso: {
        type: Date,
        requiered: true
    },
    estado: {
        type: String,
        enum: Enum_InscriptionStatus,
        required: true
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true
    }
    
});

const InscriptionModel = model("model", InscriptionSchema);
export {InscriptionModel};