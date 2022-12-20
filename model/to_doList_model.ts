import { timeStamp } from "console";
import mongoose from "mongoose";

interface To_do {
    Title:string;
    Status:string;
    Description:string;
   

}

interface iTo_do_List extends To_do,mongoose.Document{}

const To_doSchema = new mongoose.Schema({
  Title: {
    type: String,
  },
  Status: {
    type: String,
    default:"Your Task has not been completed"
  },
  Description: {
    type: String,
  },
 
},
{timestamps:true});

const listTodo = mongoose.model<iTo_do_List>("Myt To-do list", To_doSchema)

export default  listTodo