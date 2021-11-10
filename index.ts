import connectDB from "./db/db";
import { Enum_UserRole, Enum_UserStatus } from "./models/enums";
import { UserModel } from "./models/user";

const main = async () => {
  await connectDB();

  //CREAR USUARIO
  // await UserModel.create({
  //   nombre: "Camilo",
  //   apellido: "Rojas",
  //   documento: "1016109248",
  //   correo: "camilo.rojas@gmail.com",
  //   rol: Enum_UserRole.lider,
  //   estatus: Enum_UserStatus.pendiente,
  // })
  //   .then((u) => {
  //     console.log("Usuario creado", u);
  //   })
  //   .catch((e) => {
  //     console.error("Error creando el usuario ", e);
  //   });

  // //OBTENER USUARIO
  // await UserModel.find()
  // .then((u)=>{
  //   console.log("Usuario localizado ", u)
  // }).catch((e)=>{
  //   console.error('Usuario no encontrado ' , e)
  // })

  //USUARIO FILTRADO

  await UserModel.find({estado: 'pendiente'})
  .then((u)=>{
    console.log("Usuario localizado ", u)
  }).catch((e)=>{
    console.error('Usuario no encontrado ' , e)
  })
};

main();
