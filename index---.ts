import connectDB from './db/db';
import {UserModel} from './models/user';
import * as Enums from './models/enums';
import {ProjectModel} from './models/project';
import { ObjectiveModel } from './models/objective';


// const Customer = require('./models/customer');
// const Order = require('./models/order');

// Customer.insertMany([
//   {
//     nombre: 'Daniel',
//     correo: 'dsl@c.com',
//   },
//   {
//     nombre: 'Susana',
//     correo: 's@c.com',
//   },
// ])
//   .then((c) => {
//     console.log(c);
//   })
//   .catch((e) => {
//     console.error(e);
//   } );

// const customers = await Customer.find().then((c) => {
//   return c;
// });
// Order.create({
//   total: 1500,
//   customer_id: customers[0]._id,
// });

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
  
  
  //CREAR PROYECTO
  // ProjectModel.create({
  //   nombre: 'Proyecto 2',
  //   presupuesto: 150000,
  //   fechaInicio: Date.now(),
  //   fechaFinal: new Date('2022/12/05'),
  //   //lider: '618c4b3139486bcaa4106d1d',
  //   lider: '618c4e7c583425af3a526934',
  // })
  //   .then((p) => {
  //     console.log('project', p);
  //   })
  //   .catch((e) => {
  //     console.error(e);
  //   });
  
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
