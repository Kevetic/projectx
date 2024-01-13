import { Schema, model, models } from "mongoose";

const UserScheme = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unqiue: true },
  firstName: { type: String, required: true, unqiue: true },
  lastName: { type: String, required: true, unqiue: true },
  photo: { type: String, required: true, unqiue: true },
});

const User = models.user || model("user", UserScheme);

export default User;
