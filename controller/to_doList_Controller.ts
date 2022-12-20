import mongoose from "mongoose"
import express,{Request,Response} from "express"
import listTodo from "../model/to_doList_model"

const GetAll =async (req:Request,res:Response):Promise<Response> => {
    try {
        const todolistData = await listTodo.find()
        return res.status(200).json({
            message:"Data gotten successfully",
            data:todolistData
        })
    } catch (error) {
        return res.status(404).json({
            message:"An error occured while getting this data"
        })
    }
}

//To get Get a single data that completed 
const Getone =async (req:Request,res:Response):Promise<Response> => {
    try {
        const getOnedata = await listTodo.findById(req.params.id)
        return res.status(200).json({
            message:"Data gotten successfully",
            data:getOnedata
        })


    } catch (error) {
         return res.status(404).json({
           message: "An error occured while getting this data",
         });
    }
}

const Posting =async (req:Request,res:Response):Promise<Response> => {
    try {
        const { Title,
    Status,
    Description,
    } = req.body

    const postData = await listTodo.create({
      Title,
      Status,
      Description,
     
    },
    {timestamps:true},
    );

    return res.status(200).json({
        message:"Data gotten successfully",
        data:postData
    })
        
    } catch (error) {
         return res.status(404).json({
           message: "An error occured while getting this data",
         });
    }
}

const deleting =async (req:Request,res:Response):Promise<Response> => {
    try {
        const deleteData = await listTodo.findByIdAndDelete(req.params.id)
        return res.status(201).json({
            message:"Data deleted successfully",
            data:deleteData
        })
    } catch (error) {
         return res.status(404).json({
           message: "An error occured while deleting this data",
         });
    }
}

const Updating =async (req:Request,res:Response):Promise<Response>=> {
    try {
        const {Status} = req.body
        const updatingData = await listTodo.findByIdAndUpdate(
          req.params.id,
          {
            Status: Status === "Your Task has not been completed" ? "Your Task has not been completed": "Weldone !!!!Task completed",
          },
          { new: true }
        );
        return res.status(200).json({
            message:"Data successfuly Updateded ",
            data:updatingData
        })
        
    } catch (error) {
         return res.status(404).json({
           message: "An error occured while deleting this data",
         });
    }
}
//This is use to show task or list that are done or not done
const Searching =async (req:Request,res:Response):Promise<Response> => {
    try {
        const search = req.query
        const searchingData = await listTodo.find(search)
        return res.status(200).json({
            message:"I love codelab😎😎😎😊😉",
            data:searchingData
        })
    } catch (error) {
        return res.status(404).json({
          message: "An error occured while deleting this data",
        }); 
    }
}
export { GetAll, Getone, Posting, deleting,Updating,Searching };