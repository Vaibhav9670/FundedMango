import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRouter from "./route/user.route.js";
import cors from "cors"
const app = express()

import courseRoute from "./route/course.route.js"

app.use(cors())
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI;

// Connect to Mongo DB
try {
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
  console.log("Conected TO MongoDB")
} catch (error) {
  console.log("Error",error)
}

//Defining Route
app.use("/course", courseRoute)
app.use("/user", userRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})