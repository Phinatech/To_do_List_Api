import express,{Application,Request,Response} from "express"
import judithTo_doList from "../router/to_doListRouter"
require("../config/db")
const app: Application = express();
app.use(express.json())
const Port:number| string = process.env.port || 1890

app.use("/server", judithTo_doList)

app.get("/",(req:Request,res:Response):Response=>{
    return res.status(200).json({
        message:"Server is up and Running"

    }) 
});

app.listen(Port,()=>{
    console.log("Server is Listening 😎😎😊")
})