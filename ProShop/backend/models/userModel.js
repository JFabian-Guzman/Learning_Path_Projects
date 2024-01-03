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

// .pre allows to do something before saved in the DB
userSchema.pre('save'/*Action*/, async function (next) {
  // determine whether the password field of the user document has been modified
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User