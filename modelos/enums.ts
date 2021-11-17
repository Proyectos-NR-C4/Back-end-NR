enum Enum_RolUsuario {
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

enum Enum_EstatusProjecto {
  ACTIVO = 'ACTIVO',
  INACTIVO = 'INACTIVO',
}

enum Enum_FaseProjecto {
  INICIADO = 'INICIADO',
  EN_DESARROLLO = 'EN_DESARROLLO',
  TERMINADO = 'TERMINADO',
  NULL = '',
}

enum Enum_TipoObjectivo {
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
  Enum_EstatusProjecto,
  Enum_FaseProjecto,
  Enum_TipoObjectivo,
  Enum_EstatusInscription
};
