enum Enum_RolUsuario{
  ESTUDIANTE = 'ESTUDIANTE',
  LIDER = 'LIDER',
  ADMINISTRADOR = 'ADMINISTRADOR',
}

enum Enum_EstatusUsuario {
  PENDIENTE = 'PENDIENTE',
  AUTORIZADO = 'AUTORIZADO',
  NO_AUTORIZADO = 'NO_AUTORIZADO',
}

enum Enum_EstatusSubscripcion {
  ACEPTADA = 'ACEPTADA',
  RECHAZADA = 'RECHAZADA',
}

enum Enum_EstatusProyecto {
  ACTIVO = 'ACTIVO',
  INACTIVO = 'INACTIVO',
}

enum Enum_FaseProyecto {
  INICIADO = 'INICIADO',
  EN_DESARROLLO = 'EN_DESARROLLO',
  TERMINADO = 'TERMINADO',
  NULO = '',
}

enum Enum_TipoObjetivo {
  GENERAL = 'GENERAL',
  ESPECIFICO = 'ESPECIFICO',
}

enum Enum_EstatusInscription {
  ACEPTADO = 'ACEPTADO',
  RECHAZADA = 'RECHAZADA'
}

export {
  Enum_RolUsuario,
  Enum_EstatusUsuario,
  Enum_EstatusSubscripcion,
  Enum_EstatusProyecto,
  Enum_FaseProyecto,
  Enum_TipoObjetivo,
  Enum_EstatusInscription
};
