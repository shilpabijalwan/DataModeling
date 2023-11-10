import mongooes from 'mongoose'
const patientSchema=new mongooes.Schema({
name:{
  type:String,
  required:true
},
diagonsedWith:{
  type:String,
  required:true
},
address:{
  type:String,
  required:true
},
age:{
  type:Number,
  required:true
},
bloodGroup:{
  type:String,
  required:true
},
gender:{
  type:String,
  enum:["M","F","O"],
  required:true
},
addmidedIn:{
  type:mongooes.Schema.Types.ObjectId,
  ref:"Hospital",
  required:true
},


},{timestamps:true})


export const Patient= mongooes.model("Patient",patientSchema)