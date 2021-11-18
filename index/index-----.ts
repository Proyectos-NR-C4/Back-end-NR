import connectDB from "./db/db";
import { UserModel } from "./models/usuario/usuario";
import { ProjectModel } from "./models/proyecto/projecto";
import {
  Enum_ObjectiveType,
  Enum_UserRole,
  Enum_UserStatus,
} from "./models/enum/enums";
import { ObjectiveModel } from "./models/objectivo";

//INDEX MIXTO, FORMA 3: meter dentro de una función, la creación y en el main el query

const crearProyectoConObjetivos = async () => {
  //CREAR USUARIOS

  const usuarioInicial = await UserModel.create({
    nombre: "Mery",
    apellido: "Grimaldos",
    documento: "23324410",
    correo: "rmerygrim@gmail.com",
    rol: Enum_UserRole.administrador,
    estatus: Enum_UserStatus.autorizado,
  });

  //CREAR PROYECTO

  const proyectoCreado = await ProjectModel.create({
    nombre: "Proyecto 1",
    fechaInicio: new Date("2021/11/11"),
    fechaFinal: new Date("2021/11/19"),
    presupuesto: 150000,
    lider: usuarioInicial._id,
  });

  //CREAR OBJETIVOS

  const objetivoGeneral = await ObjectiveModel.create({
    descripcion: "Soy el objetivo General del proyecto",
    tipo: Enum_ObjectiveType.general,
    proyecto: proyectoCreado._id,
  });

  const objetivoEspecifico1 = await ObjectiveModel.create({
    descripcion: "Soy el primer objetivo especifico del proyecto",
    tipo: Enum_ObjectiveType.especifico,
    proyecto: proyectoCreado._id,
  });

  const objetivoEspecifico2 = await ObjectiveModel.create({
    descripcion: "Soy el segundo objetivo especifico del proyecto",
    tipo: Enum_ObjectiveType.especifico,
    proyecto: proyectoCreado._id,
  });
};
const main = async () => {
  await connectDB();

  const proyecto = await ProjectModel.findOne({_id: "618da8a94073ea05ab9fc2bf"});
  console.log("Encontré el proyecto: ", proyecto);

  const objetivos = await ObjectiveModel.find({proyect: '618da8a94073ea05ab9fc2bf'});

  console.log("Los objetivos del proyecto son: ", objetivos);

  const ProyectoConObjetivos = {...proyecto, objetivos: objetivos};
  console.log("El proyecto con objetivos es: ", ProyectoConObjetivos);



};
main();
