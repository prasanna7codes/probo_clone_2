import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    email: { type: String, unique: true },
    password: { type: String },
    name: { type: String },

    
})

export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
