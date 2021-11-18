enum Enum_RolUsuario {
  ESTUDIANTE = 'ESTUDIANTE',
  LIDER = 'LIDER',
  ADMINSTRADOR = 'ADMINSTRADOR',
}

enum Enum_EstadoUsuario {
  PENDIENTE = 'PENDIENTE',
  AUTORIZADO = 'AUTORIZADO',
  NO_AUTORIZADO = 'NO_AUTORIZADO',
}

enum Enum_EstadoProyecto {
  ACTIVO = 'ACTIVO',
  INACTIVO = 'INACTIVO',
}

enum Enum_FaseProyecto {
  INICIADO = 'INICIADO',
  EN_DESARROLLO = 'EN_DESARROLLO',
  TERMINADO = 'TERMINADO',
  NULL = '',
}

enum Enum_TipoObjectivo {
  GENERAL = 'GENERAL',
  ESPECIFICO = 'ESPECIFICO',
}

enum Enum_EstadoInscripcion {
  ACEPTADA = 'ACEPTADA',
  rechadazada = 'RECHAZADA'
}

export {
  Enum_RolUsuario,
  Enum_EstadoUsuario,
  Enum_EstadoProyecto,
  Enum_FaseProyecto,
  Enum_TipoObjectivo,
  Enum_EstadoInscripcion
};
