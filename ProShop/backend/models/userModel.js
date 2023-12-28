import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    requiered: true,
  },
  isAdmin: {
    type: Boolean,
    requiered: true,
    default: false,
  },
}, {
  timestamps: true,
})

const User = mongoose.model('User', userSchema);

export default userSchema