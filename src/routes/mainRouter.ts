import express from "express";
import { readAll, readOne } from "../controllers/readControllers";
import { createOne } from "../controllers/createController";
import { updateOne } from "../controllers/updateController";
import { deleteOne } from "../controllers/deleteController";
import { errorMiddleware } from "../middlewares/errorMiddleware";

const router: express.Router = express.Router();


router.get("/", readAll); //can use to display all kinds of pages (topics) (sends all the pages object)

router.get("/read/:id", readOne); //read any specific page (id as param? yes. liked this better than query) (/read/2355732 vs /read?id=2355732)

router.post("/create", createOne); //create new page

router.put("/update/:id", updateOne); //update any specific page with thier id as param

router.delete("/delete/:id", deleteOne); //delete any specific page

router.use(errorMiddleware);

export default router;
