import connectDB from './db/db';
import {UserModel} from './models/usuario/usuario';
import * as Enums from './models/enum/enums';
import {ProjectModel} from './models/proyecto/projecto';
import { ObjectiveModel } from './models/objectivo';


//INDEX PARA CREAR OBJETIVOS, FORMA 1
const main = async () => {
  await connectDB();
    
  //CREAR OBJETIVOS
  // const objet1 = await ObjectiveModel.create({
  //   descripcion: 'Es es el objetivo general del proyecto',
  //   tipo: Enums.Enum_ObjectiveType.general

  // })

  const objet2 = await ObjectiveModel.create({
    descripcion: 'Es son los objetivos específicos del proyecto',
    tipo: Enums.Enum_ObjectiveType.especifico

  })
  
  };

main();
