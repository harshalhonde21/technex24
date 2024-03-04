import mongoose from 'mongoose';

const { Schema } = mongoose;

const roleEnum = ['User', 'Admin'];

const LoginSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: roleEnum,
    default: 'User'
  }
});

export default mongoose.model("judge", LoginSchema);
