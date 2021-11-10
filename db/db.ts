import { connect } from 'mongoose';

const connectDB = async () => {
  return await connect(
    'mongodb+srv://nairor:4029@adminproyectsnr.dkeup.mongodb.net/adminproyectsnr?retryWrites=true&w=majority'
  ).then(()=>{
    console.log ("Conexion Exitosa")
  }).catch((e)=>{
    console.error("Error conectándose a la DB", e)
  });
};

export default connectDB;
