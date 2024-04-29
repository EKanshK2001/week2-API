import { Request, Response } from 'express'
import PageModel from '../db'

export const deleteOne = async (req: Request, res: Response) => {
    
    //need to delete the specific page document with the pageid

    const pageId = req.params.id;

    try {
        await PageModel.findByIdAndDelete(pageId);
        res.status(200).json({msg: "successfully deleted."});

    } catch (error) {
        console.log(error);
        res.status(500);
    }
    
}