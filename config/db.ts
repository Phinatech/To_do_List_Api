import mongoose from "mongoose";

const Judy = "mongodb://localhost/To-dolist"
const lifeURI =
  "mongodb+srv://SeraphinaDB:Judy200deo20@cluster0.59l2guk.mongodb.net/To-doList?retryWrites=true&w=majority";
mongoose.connect(lifeURI)
mongoose.connection
.on("open",()=>{
    console.log("Database connected")
})

.once("error",()=>{
    console.log("An error occured ")
})
