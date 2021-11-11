import connectDB from './db/db';
import {UserModel} from './models/user';
import * as Enums from './models/enums';
import {ProjectModel} from './models/project';
import { ObjectiveModel } from './models/objective';


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
