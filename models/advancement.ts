import { Schema, model } from "mongoose";
import { UserModel } from "./user";
import { ProjectModel } from "./project";

interface Avance {
  description: string;
  fecha: Date;
  observaciones: [string];
  proyecto: Schema.Types.ObjectId;
  creadoPor: Schema.Types.ObjectId;
}

const AdvancementSchema = new Schema<Avance>({
  description: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  observaciones: [{ 
      type: String, 
      required: true 
    }],
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true
    },
    creadoPor: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        requiered: true
    }
});


const AdvancementModel = model("model", AdvancementSchema);
export {AdvancementModel};