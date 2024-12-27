import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  orderValue: { type: Number, required: true },
  quantity: { type: Number, required: true },
  orderId: { type: String, required: true, unique: true },
  expectedDelivery: { type: Date, required: true },
  status: {
    type: String,
    enum: ['Delayed', 'Confirmed', 'Returned', 'Out for delivery'],
    default: 'Confirmed'
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);