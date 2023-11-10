import mongooes from 'mongooes';
const productSchema = new mongooes.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
      required: true,
    },
    category: {
      type: mongooes.Schema.Types.ObjectID,
      ref:"Category",
      required: true,
    },
    owner: {
      type: mongooes.Schema.Types.ObjectID,
      ref:"User",
      required: true,
    },
  },
  { timestemps: true }
);
export const Product = mongooes.model('Product', productSchema);
