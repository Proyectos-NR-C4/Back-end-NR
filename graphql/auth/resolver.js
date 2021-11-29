import { ModeloUsuario } from "../../modelos/usuario/usuario.js";
import bcryp from "bcrypt";
import { generateToken } from "../../utils/tokensUtils.js";

const resolversAutenticacion = {
  Mutation: {
    registro: async (parent, args) => {
      const salt = await bcryp.genSalt(10);
      const hashedPassword = await bcryp.hash(args.password, salt);
      const usuarioCreado = await ModeloUsuario.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        password: hashedPassword,
      });
      console.log("usuario creado ", usuarioCreado);
      return {
        token: generateToken({
          _id: usuarioCreado._id,
          nombre: usuarioCreado.nombre,
          apellido: usuarioCreado.apellido,
          identificacion: usuarioCreado.identificacion,
          corro: usuarioCreado.correo,
          rol: usuarioCreado.rol,
        }),
      };
    },
    login: async (parent, args) => {
      const usuarioEncontrado = await ModeloUsuario.findOne({
        correo: args.correo,
      });
      if (await bcryp.compare(args.password, usuarioEncontrado.password))
        return {
          token: generateToken({
            _id: usuarioEncontrado._id,
            nombre: usuarioEncontrado.nombre,
            apellido: usuarioEncontrado.apellido,
            identificacion: usuarioEncontrado.identificacion,
            corro: usuarioEncontrado.correo,
            rol: usuarioEncontrado.rol,
          }),
        };
    },
    refreshToken: async (parent, args, context) => {
      console.log("contexto: ", context);
      if (!context.userData) {
        return {
          error: "token no válido",
        };
      }
      else{
        return {
          token: generateToken({
            _id: context.userData._id,
            nombre: context.userData.nombre,
            apellido: context.userData.apellido,
            identificacion: context.userData.identificacion,
            corro: context.userData.correo,
            rol: context.userData.rol,
          }),
        }
      }
    },

    /**Validar que el contexto tenga la inf de user, si, sí, refrescar el token, si, no, devolver al login para crear uno nuevo */
  },
};

export { resolversAutenticacion };
