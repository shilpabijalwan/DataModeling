import mongooes from 'mongoose';
const doctorSchema = new mongooes.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    exprienceInYear: {
      type: Number,
      required: true,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongooes.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true,
      },
    ],
    exprienceInYear: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Doctor = mongooes.model('Doctor', doctorSchema);
