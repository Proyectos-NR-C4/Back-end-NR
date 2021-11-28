import { gql} from 'apollo-server-express';

const tiposUsuario = gql`
    


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
  }
  
          
        
`;

export {tiposUsuario};
