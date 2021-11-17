import connectDB from "./db/db";
import { UserModel } from "./modelos/usuario";
import { ProjectModel } from "./modelos/projecto";
import {
  Enum_TipoObjectivo,
  Enum_RolUsuario,
  Enum_EstatusUsuario,
} from "./modelos/enums";

const main = async () => {
  await connectDB();

  const usuarioInicial = await UserModel.create({
    nombre: "Javier",
    apellido: "Ramirez",
    documento: "79789654",
    correo: "javier.ramirez@gmail.com",
    rol: Enum_RolUsuario.ADMINISTRADOR,
    estatus: Enum_EstatusUsuario.AUTORIZADO,
  });

  const proyectoCreado = await ProjectModel.create({
    nombre: "Proyecto 2",
    fechaInicio: new Date("2021/11/11"),
    fechaFinal: new Date("2021/12/20"),
    presupuesto: 200000,
    lider: usuarioInicial._id,
    objetivos: [
      {
        descripcion: "Este es el objetivo General del proyecto",
        tipo: Enum_TipoObjectivo.GENERAL,
      },
      {
        descripcion: "Este es el primer el objetivo Especifico del proyecto",
        tipo: Enum_TipoObjectivo.ESPECIFICO,
      },
      {
        descripcion: "Este es el segundo objetivo Especifico del proyecto",
        tipo: Enum_TipoObjectivo.ESPECIFICO,
      },
    ],
  });
};

main();
