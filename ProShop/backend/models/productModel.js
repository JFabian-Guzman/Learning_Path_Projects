import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  user: {
    // Every object added will have an _id
    // This is to identify who added the new product
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
}, {
  // Save the time a product is created and updated
  timestamps: true,
});


const productSchema = new mongoose.Schema({
  user: {
    // Every object added will have an _id
    // This is to identify who added the new product
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name : {
    type: String,
    required: true,
  },
  image : {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  }
}, {
  // Save the time a product is created and updated
  timestamps: true,
});

// Pass a product with the Schema created before
const Product = mongoose.model("Product", productSchema);

export default Product;