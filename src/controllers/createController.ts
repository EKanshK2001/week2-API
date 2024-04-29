import { Request, Response } from 'express'
import PageModel from "../db/db";

export const createOne = async (req:Request, res:Response) => {                    //create new page
    
    const {title, quote, disclaimer, content} = req.body;

    // res.json({title, quote, disclaimer, content,})
    //save to mongodb
    await PageModel.create({
        title, quote, disclaimer, content,
    })

    res.status(200).json({msg : "saved successfully"})
}