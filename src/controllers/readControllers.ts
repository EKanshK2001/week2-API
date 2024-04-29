import { Request, Response } from "express"
import  PageModel  from '../db'


export const readAll = async (req: Request, res: Response) => {
    //needs to read the titles from all the existing pages in the database and send it

    try {
        const pages = await PageModel.find({});
        res.status(200).json(pages);

    }
    catch (error) {
        console.log(error);
        res.status(500);
    }
}


export const readOne = async (req: Request, res: Response) => {
    //needs to extract and send the whole page by taking the id param in the request
    const id = req.params.id;
    // console.log(id);
    
    try {
        const page = await PageModel.findById(id);
        res.status(200).json(page)
    }
    catch (error) {
        console.log(error);
        res.status(500);
    }
}