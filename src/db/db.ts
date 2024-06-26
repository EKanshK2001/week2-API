import mongoose, { Schema } from "mongoose";
//db url
import "dotenv/config";

const connectDB = async () => {
  try {
    //connect to db with url
    await mongoose.connect(process.env.mongoURL!).then(() => {
      console.log("database connnected.");
    });
    
  } catch (error) {
    console.log(error);
  }
};

connectDB();

interface page extends Document {
  title: string;
  quote: string;
  disclaimer: string;
  content: string;
}

const pageSchema: Schema = new mongoose.Schema<page>({
  title: { type: String },
  quote: { type: String },
  disclaimer: { type: String },
  content: { type: String },
});

const PageModel = mongoose.model<page>("Page", pageSchema);

export default PageModel;
