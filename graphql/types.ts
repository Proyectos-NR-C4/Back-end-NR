import { gql} from 'apollo-server-express';

const typeDefs = gql`
    scalar Date

    enum Enum_EstatusUsuario{
        PENDIENTE 
        AUTORIZADO 
        NO_AUTORIZADO

}
enum Enum_RolUsuario{
    ESTUDIANTE 
    LIDER
    ADMINISTRADOR
}
enum Enum_EstatusProyecto {
  ACTIVO 
  INACTIVO 
}
enum Enum_FaseProyecto {
  INICIADO 
  EN_DESARROLLO 
  TERMINADO 
  NULO
  
}
enum Enum_TipoObjetivo {
  GENERAL 
  ESPECIFICO 
}

type Objetivo{
  _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
}
input crearObjetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }
  type Usuario{
      _id: ID!
      nombre: String!
      apellido: String!
      correo: String!
      documento: String!
      estatus: Enum_EstatusUsuario
      rol: Enum_RolUsuario!
      

  }
  type Query{
      Usuarios: [Usuario]
      Usuario(_id: String!): Usuario
      Proyectos: [Proyecto]
  }

  type Mutation {
      crearUsuario(
        nombre: String!
        apellido: String!
        correo: String!
        documento: String!
        rol: Enum_RolUsuario!
        estatus: Enum_EstatusUsuario

      ):Usuario

      eliminarUsuario(_id: String , correo: String) : Usuario

      editarUsuario(
      _id: String!
      nombre: String!
      apellido: String!
      documento: String!
      correo: String!
      rol: Enum_RolUsuario!
      estatus: Enum_EstatusUsuario
    ): Usuario

    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      estado: Enum_EstatusProyecto!
      fase: Enum_FaseProyecto!
      lider: String!
      objetivos: [crearObjetivo]
    ): Proyecto
  }

  type Proyecto{
      _id: ID!
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      estado: Enum_EstatusProyecto!
      fase: Enum_FaseProyecto!
      lider: Usuario!
      objetivos: [Objetivo]
  }
  
          
        
`;
export { typeDefs};