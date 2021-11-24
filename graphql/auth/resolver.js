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
  },
};

export { resolversAutenticacion };
