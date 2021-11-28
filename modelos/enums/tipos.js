import { gql} from 'apollo-server-express';

const tiposEnums = gql`
    

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

enum Enum_EstadoInscripcion {
    ACEPTADO
    RECHAZADO
    PENDIENTE
  }

          
        
`;
export { tiposEnums};