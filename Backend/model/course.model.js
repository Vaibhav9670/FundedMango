import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    name:String,
    price:String,
    category:String,
    image:String
})

const Course= mongoose.model("Course",productSchema);

export default Course;