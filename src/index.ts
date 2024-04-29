import express, { Request, Response } from "express"
const PORT = 3000;
import  PageModel  from './db'
//import page model

const app:express.Application = express()
app.use(express.json())

app.get('/', (req:Request, res:Response) => {                           //can use to display all kinds of pages (topics)
    res.json({msg: "hi"})
})

app.get('/read', (req:Request, res:Response) => {                       //read any specific page (id as param?)
    res.json({msg: "sup bitches"})
})

app.post('/create', (req:Request, res:Response) => {                    //create new page
    
    const {title, quote, disclaimer, content} = req.body;

    // res.json({title, quote, disclaimer, content,})
    //save to mongodb
    PageModel.create({
        title, quote, disclaimer, content,
    })

    res.json({msg : "saved successfully"})
})

app.put('/update', (req:Request, res:Response) => {                     //update any specific page with thier id as param
    
})

app.delete('/delete', (req:Request, res:Response) => {                  //delete any specific page
    
})

app.listen(PORT, () => {
    console.log(`server running on link : http://localhost:${PORT}/` );
});
