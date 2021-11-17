import { Schema, model } from "mongoose";
import { UserModel } from "./usuario";
import { Enum_EstatusInscription } from "./enums";

interface Inscripcion {
    fechIngreso: Date
    fechaEgreso: Date
    estado: Enum_EstatusInscription
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
        enum: Enum_EstatusInscription,
        required: true
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true
    }
    
});

const InscriptionModel = model("modelo", InscriptionSchema);
export {InscriptionModel};