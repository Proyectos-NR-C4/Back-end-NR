import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const objectivoSchema = new Schema({
  descripcion: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ['GENERAL', 'ESPECIFICO'],
    required: true,
  },
});

const ModeloObjectivo = model('Objetivo', objectivoSchema);

export { ModeloObjectivo };