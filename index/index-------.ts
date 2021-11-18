import connectDB from "../db/db";
import { UserModel } from "../modelos/usuario/usuario";
import { ProjectModel } from "../modelos/proyecto/proyecto";
import {
  Enum_ObjectiveType,
  Enum_UserRole,
  Enum_UserStatus,
} from "../modelos/enum/enums";
import { ObjectiveModel } from "../modelos/objetivo/objectivo";

//INDEX FORMA PELIGROSA PERO EFECTIVA: No hace referencias, registra los elementos directamente en el One
// Crea el proyecto y agrega manualmente los objetivos, No usa el modelo de Objetivos
const creacionProyectoConObjetivos3 = async () => {
  //CREAR EL USUARIOS
  const usuarioInicial = await UserModel.create({
    nombre: "Mery",
    apellido: "Grimaldos",
    documento: "23324410",
    correo: "rmerygrim@gmail.com",
    rol: Enum_UserRole.administrador,
    estatus: Enum_UserStatus.autorizado,
  });

  //2. CREAR PROYECTO Y AGREGAR EL ARRAY DE OBJETIVOS

  const proyectoCreado = await ProjectModel.create({
    nombre: "Proyecto 1",
    fechaInicio: new Date("2021/11/11"),
    fechaFinal: new Date("2021/11/19"),
    presupuesto: 150000,
    lider: usuarioInicial._id,
    objetivos: [
      {
        descripcion: "Este es el objetivo General del proyecto",
        tipo: Enum_ObjectiveType.general,
      },
      {
        descripcion: "Este es el primer el objetivo Especifico del proyecto",
        tipo: Enum_ObjectiveType.especifico,
      },
      {
        descripcion: "Este es el segundo objetivo Especifico del proyecto",
        tipo: Enum_ObjectiveType.especifico,
      },
    ],
  });
};

const consultarProyectoConObjetivos3 = async () => {
  const proyecto = await ProjectModel.find({ _id: "618dd7f90a8bf714834a158f" });
  //console.log("Proyecto encontrado: ", proyecto)
};

const main = async () => {
  await connectDB();
};

main();
