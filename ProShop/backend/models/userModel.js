import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

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
}
);

userSchema.methods.matchPassword = async function( enteredPassword ) {
  return await bcrypt.compare(enteredPassword
    , this.password/*Password store in the DB from this user*/);
};

const User = mongoose.model('User', userSchema);

export default User