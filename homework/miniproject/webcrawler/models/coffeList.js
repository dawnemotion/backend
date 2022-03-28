import mongoose from "mongoose";

const coffeeListSchema = new mongoose.Schema({
    name: String,
    image: String,
})

export const CoffeeList = mongoose.model("CoffeeList", coffeeListSchema)