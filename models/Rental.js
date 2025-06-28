const mongoose = require('mongoose');

const RentalItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
  size: String,
  color: String,
  quantity: {
    type: Number,
    default: 1,
  },
});

const RentalSchema = new mongoose.Schema({
  customer: {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
  },
  items: [RentalItemSchema],
  startDate: Date,
  endDate: Date,
  specialRequests: String,
  totalAmount: Number,
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'confirmed', 'shipped', 'delivered', 'returned'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Rental', RentalSchema);