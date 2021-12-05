import { ModeloUsuario } from "./usuario.js";
import bcrypt from "bcrypt";
import { ModeloInscripcion } from "../inscripcion/inscripcion.js";

const resolversUsuario = {
  Usuario: {
    inscripciones: async (parent, args, context)=>{
      return ModeloInscripcion.find({estudiante: parent._id})
    }
  },
  Query: {
    Usuarios: async (parent, args, context) => {
      const usuarios = await ModeloUsuario.find();
      // .populate([
      //   {
      //     path: "inscripciones",
      //     populate: {
      //       path: "proyecto",
      //       populate: [{ path: "lider" }, { path: "avances" }],
      //     },
      //   },
      //   {
      //     path: "proyectosLiderados",
      //   },
      // ]);
      return usuarios;
    },

    // Query: {
    //   Usuarios: async (parent, args, context) => {
    //     console.log("context: ", context);
    //     if (context.userData.rol === "ADMINISTRADOR") {
    //       const usuarios = await ModeloUsuario.find();
    //       return usuarios;
    //     } else if (context.userData.rol === "ESTUDIANTE") {
    //       const usuarios = await ModeloUsuario.find({ rol: "ESTUDIANTE" });
    //       return usuarios;
    //     }
    //     return null;
    //   },

    // .populate("avances")
    //     .populate("inscripciones");

    // Query: {
    //   Usuario: async (parent, args, context) => {
    //     if (context.userData.rol === "ADMINISTRADOR") {
    //       const usuario = await ModeloProyecto.find()
    //         .populate({
    //           path: "avances",
    //           populate: {
    //             path: "creadoPor",
    //           },
    //         })
    //         .populate("lider");
    //       return proyectos;
    //     } else {
    //       const proyectos = await ModeloProyecto.find()
    //         .populate("avances")
    //         .populate("inscripciones");
    //       return proyectos;
    //     }
    //   },
    // },

    Usuario: async (parent, args) => {
      const usuario = await ModeloUsuario.findOne({ _id: args._id });
      return usuario;
    },
  },

  Mutation: {
    crearUsuario: async (parent, args) => {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.password, salt);
      const usuarioCreado = await ModeloUsuario.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        password: hashedPassword,
      });

      if (Object.keys(args).includes("estado")) {
        usuarioCreado.estado = args.estado;
      }
      return usuarioCreado;
    },
    editarUsuario: async (parent, args) => {
      const usuarioEditado = await ModeloUsuario.findByIdAndUpdate(
        args._id,
        { ...args.campos },
        { new: true }
      );
      return usuarioEditado;
    },

    eliminarUsuario: async (parent, args) => {
      if (Object.keys(args).includes("_id")) {
        const usuarioEliminado = await ModeloUsuario.findOneAndDelete({
          _id: args._id,
        });
        return usuarioEliminado;
      } else if (Object.keys(args).includes("correo")) {
        const usuarioEliminado = await ModeloUsuario.findOneAndDelete({
          correo: args.correo,
        });
        return usuarioEliminado;
      }
    },
  },
};

export { resolversUsuario };
