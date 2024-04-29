import { Request, Response } from 'express'
import PageModel from '../db'

export const updateOne = async (req: Request, res: Response) => {
    //need to update the whole page object whenever called
    //extract the body from req.body and update to db

    const id = req.params.id;
    const { title, quote, disclaimer, content } = req.body;

    
    try {
        //here replace is also a good option
        //await PageModel.findOneAndReplace({_id: id}, updatedPage)
        await PageModel.findOneAndUpdate({_id: id}, {$set: {title, quote, disclaimer, content}}, {new: true});
        res.status(200).json({msg: "updated successfully"});

    } catch (error) {
        console.log(error);
        res.status(500);
    }
}