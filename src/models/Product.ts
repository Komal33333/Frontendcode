import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  buyingPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  thresholdValue: { type: Number, required: true },
  expiryDate: { type: Date },
  makeYear: { type: String },
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Supplier'
  },
  stockLocations: [{
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
    quantity: { type: Number, default: 0 }
  }],
  status: {
    type: String,
    enum: ['In-stock', 'Out of stock', 'Low stock'],
    default: 'In-stock'
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Product', productSchema);