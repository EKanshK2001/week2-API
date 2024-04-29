import express from "express"
import {readAll, readOne } from "./controllers/readControllers";
import { createOne } from "./controllers/createController";
import { updateOne } from "./controllers/updateController";
import { deleteOne } from "./controllers/deleteController";


const PORT = 3000;
const app:express.Application = express()
app.use(express.json())


app.get('/api/v1/', readAll);                                          //can use to display all kinds of pages (topics) (sends all the pages object)

app.get('/api/v1/read/:id', readOne);                                  //read any specific page (id as param? yes. liked this better than query) (/read/2355732 vs /read?id=2355732)

app.post('/api/v1/create', createOne);                                 //create new page

app.put('/api/v1/update:id', updateOne);                               //update any specific page with thier id as param

app.delete('/api/v1/delete:id', deleteOne);                            //delete any specific page



app.listen(PORT, () => {
    console.log(`server running on link : http://localhost:${PORT}/` );
});
