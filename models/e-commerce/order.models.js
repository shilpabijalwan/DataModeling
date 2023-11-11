import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      require: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
    orderItems: {
      type: [orderItemSchema],
      require: true,
    },
    address: {
      type: string,
      require: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);
export const Order = mongoose.model('Order', orderSchema);
