const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['wedding-dresses', 'wedding-sarees', 'handloom', 'gowns', 'party-wear'],
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
  description: String,
  images: [String],
  material: String,
  careInstructions: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', ProductSchema);