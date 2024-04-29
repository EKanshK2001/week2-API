import express from "express"
import {readAll, readOne } from "./controllers/readControllers";
import { createOne } from "./controllers/createController";
import { updateOne } from "./controllers/updateController";
import { deleteOne } from "./controllers/deleteController";


const PORT = 3000;
const app:express.Application = express()
app.use(express.json())


app.get('/', readAll);                                  //can use to display all kinds of pages (topics)

app.get('/read', readOne);                              //read any specific page (id as param?)

app.post('/create', createOne);                         //create new page

app.put('/update', updateOne)                           //update any specific page with thier id as param

app.delete('/delete', deleteOne)                        //delete any specific page



app.listen(PORT, () => {
    console.log(`server running on link : http://localhost:${PORT}/` );
});
