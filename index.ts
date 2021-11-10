import connectDB from "./db/db";
import { Enum_UserRole, Enum_UserStatus } from "./models/enums";
import { UserModel } from "./models/user";

const main = async () => {
  await connectDB();

  //CREAR USUARIO
  await UserModel.create({
    nombre: "Nairo",
    apellido: "Rojas",
    documento: "7171305",
    correo: "nairo.rojas@gmail.com",
    rol: Enum_UserRole.administrador,
    estatus: Enum_UserStatus.autorizado,
  })
    .then((u) => {
      console.log("Usuario creado", u);
    })
    .catch((e) => {
      console.error("Error creando el usuario ", e);
    });

  // //OBTENER USUARIO
  // await UserModel.find()
  // .then((u)=>{
  //   console.log("Usuario localizado ", u)
  // }).catch((e)=>{
  //   console.error('Usuario no encontrado ' , e)
  // })

  //USUARIO FILTRADO

  // await UserModel.find({correo: 'tatiana.rojas@gmail.com'})
  // .then((u)=>{
  //   console.log("Usuario localizado ", u)
  // }).catch((e)=>{
  //   console.error('Usuario no encontrado ' , e)
  // })
};

main();
