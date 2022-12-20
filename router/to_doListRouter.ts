import {Router} from "express"
import { deleting, GetAll, Getone, Posting, Searching, Updating } from "../controller/to_doList_Controller"

const judithTo_doList = Router()

judithTo_doList.route("/GetList").get(GetAll)
judithTo_doList.route("/GettingOne/:id").get(Getone)
judithTo_doList.route("/Search").get(Searching)
judithTo_doList.route("/postingData").post(Posting)
judithTo_doList.route("/update/:id").patch(Updating) 
judithTo_doList.route("/deleting").delete(deleting) 


export default judithTo_doList