import mongoose from "mongoose";

const houseSchema = mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User" 
  },
  city: { type: String, required: true },
  county: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  area: { type: String, required: true },
  bathrooms: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  image: { type: String, required: true },
  inSale: { type: Boolean, required: true },
  forRent: { type: Boolean, required: true },
}, {
  timestamps: true,
});

const House = mongoose.model("House", houseSchema);

export default House;