import { ModeloProyecto } from "./proyecto";

const resolversProyecto = {
  Query: {
    Proyectos: async (parent, args) => {
      const projectos = await ModeloProyecto.find().populate("lider");
      return projectos;
    },
  },

  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await ModeloProyecto.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFinal: args.fechaFinal,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return proyectoCreado;
    },
  },
};

export { resolversProyecto };
