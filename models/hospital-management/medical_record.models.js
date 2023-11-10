import mongooes from 'mongoose';
const medicalSchema = new mongooes.Schema({}, { timestamps: true });
export const Medical = mongooes.model('Medical', medicalSchema);
