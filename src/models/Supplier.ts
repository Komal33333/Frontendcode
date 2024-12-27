import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  product: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  type: {
    type: String,
    enum: ['Taking Return', 'Not Taking Return'],
    required: true
  },
  onTheWay: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Supplier', supplierSchema);