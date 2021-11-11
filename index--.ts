import connectDB from './db/db';
//import {UserModel} from './models/user';
import {ProjectModel} from './models/project';
import { ObjectiveModel } from './models/objective';


//INDEX PARA CREAR PROYECTOS, FORMA 1
const main = async () => {
  await connectDB();
    
  //CREAR PROYECTO
  ProjectModel.create({
    nombre: 'Proyecto 4',
    presupuesto: 400000,
    fechaInicio: Date.now(),
    fechaFinal: new Date('2022/12/15'),
    lider: '618c4b3139486bcaa4106d1d',
    //lider: '618c4e7c583425af3a526934',
    objetivos: ['618c8a63aca6ffabc203c09e', '618c8aaf9615f38beaf46cf6']
  })
    .then((p) => {
      console.log('Projecto crando: ', p);
    })
    .catch((e) => {
      console.error("Error creando el proyecto ", e);
    });
  
    //BUSCAR PROYECTO
    // const proyecto = await ProjectModel.find({nombre: 'Proyecto 2'}).populate('lider')
    // console.log("El proyecto es: ", proyecto)



  // ProjectModel.findOne({ _id: '6187d906541df1983cd78518' })
  //   .populate('lider')
  //   .then((p) => {
  //     console.log(p);
  //   });



  };

main();
