import mongooes from 'mongoose';
const userSchema = new mongooes.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps }
);

export const User = mongooes.model('USer', userSchema);
