import mongooes from 'mongoose';
const hospitalSchema = new mongooes.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    specializationIn: [
      {
        type: String,
        required: true,
      },
    ],
    likes: [
      {
        type: mongooes.Schema.Type.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true }
);

export const Hospital = mongooes.model('Hospital', hospitalSchema);
