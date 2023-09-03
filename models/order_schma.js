import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  status: {
    type: Boolean,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  products: [
    {
      id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
