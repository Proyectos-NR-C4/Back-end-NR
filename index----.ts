import connectDB from "./db/db";
import { UserModel } from "./models/user";
import { ProjectModel } from "./models/project";
import { Enum_ObjectiveType, Enum_UserRole, Enum_UserStatus } from "./models/enums";
import { ObjectiveModel } from "./models/objective";


//INDEX MIXTO, FORMA 2
const main = async () => {
  await connectDB();

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
    fechaInicio: new Date('2021/11/11'),
    fechaFinal: new Date('2021/11/19'),
    presupuesto: 150000,
    lider: usuarioInicial._id,
  });
  
  //CREAR OBJETIVOS
  
  const objetivoGeneral = await ObjectiveModel.create({
      descripcion: "Soy el objetivo General del proyecto",
      tipo: Enum_ObjectiveType.general,
      proyecto: proyectoCreado._id
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
    
    console.log("Proyecto creado: ", proyectoCreado);
  };
main();
