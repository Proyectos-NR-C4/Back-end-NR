import { gql } from "apollo-server-express";

const tiposUsuario = gql`
  input camposUsuario {
    nombre: String
    apellido: String
    identificacion: String
    correo: String
    rol: Enum_Rol
    estado: Enum_EstadoUsuario
    inscripciones: Enum_EstadoInscripcion
  }
  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
    inscripciones: [Inscripcion]
    avancesCreados: [Avance]
    proyectosLiderados: [Proyecto]
  }

  type Query {
    Usuarios: [Usuario]
    Usuario(_id: String!): Usuario
  }
  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
      password: String!
    ): Usuario

    editarUsuario(_id: String, campos: camposUsuario): Usuario

    eliminarUsuario(_id: String, correo: String): Usuario
  }
`;

export { tiposUsuario };
