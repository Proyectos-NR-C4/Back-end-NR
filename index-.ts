import connectDB from "./db/db";
import { Enum_UserRole, Enum_UserStatus } from "./models/enums";
import { UserModel } from "./models/user";

//INDEX PARA CREAR USUARIOS, FORMA 1
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
  // await UserModel.find({ estado: "pendiente" })
  //   .then((u) => {
  //     console.log("Usuario localizado ", u);
  //   })
  //   .catch((e) => {
  //     console.error("Usuario no encontrado ", e);
  //   });

  //EDITAR USUARIO
  // await UserModel.findOneAndUpdate({ correo: 'camilo.rojas@gmail.com'}, {nombre:'Brayan', apellido: "Rojitas"})
  // .then((u)=>{
  //   console.log("Usuario actualizado ", u)
  // }).catch((e)=>{
  //   console.error("Error actualizando el usuario ", e)
  // })

  //ELIMINAR USUARIO
  await UserModel.findOneAndDelete({ correo: 'camilo.rojas@gmail.com'})
  .then((u)=>{
    console.log("Usuario eliminado ", u)
  }).catch((e)=>{
    console.log("Error eliminando usuario ", e)
  })




};

main();
