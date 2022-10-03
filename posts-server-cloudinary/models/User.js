import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate"
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true, },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post", autopopulate: true}],
  },
  { timestamps: true, versionKey: false }
);

UserSchema.plugin(autopopulate)

export default mongoose.model("User", UserSchema);
