import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true },
  username: { type: String, required: true },
  profilepic: { type: String },
  coverpic: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  razorpayid: { type: String },
  razorpaysecret: { type: String }
});


export default mongoose.models.User || mongoose.model("User", UserSchema);