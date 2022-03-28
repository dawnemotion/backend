import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    name: String,
    email: String,
    personal: String,
    prefer: String,
    pwd: String,
    phone: String,
    og:Object
})

export const Profile = mongoose.model("Profile", profileSchema)