
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv'; 
import allRoutes from './routes';
import { Request, Response,NextFunction } from "express";

dotenv.config(); 

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const port = process.env.BACKEND_PORT || 1001;


app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

app.use("/api",allRoutes)


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  })