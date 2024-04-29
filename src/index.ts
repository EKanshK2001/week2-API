import express from "express";
import router from './routes/mainRouter'
import { errorMiddleware } from "./middlewares/errorMiddleware";

const PORT = 3000;
const app: express.Application = express();
app.use(express.json());

app.use('/api/v1/', router);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`server running on link : http://localhost:${PORT}/`);
});
