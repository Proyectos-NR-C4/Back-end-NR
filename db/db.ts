import mongoose from 'mongoose';

const connectDB = async () => {
  return await mongoose
  .connect(process.env.DATABASE_URL)
  .then(()=>{
    console.log ("Conexion Exitosa")
  }).catch((e)=>{
    console.error("Error conectándose a la DB", e)
  });
};

export default connectDB;
