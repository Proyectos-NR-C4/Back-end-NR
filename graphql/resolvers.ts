import { resolversProyecto } from "../modelos/proyecto/resolvers";
import { resolversUsuario } from "../modelos/usuario/resolvers";
import { resolversAvance } from "../modelos/avance/resolvers";

export const resolvers = [resolversUsuario, resolversProyecto, resolversAvance];