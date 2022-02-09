import express, {Request, Response} from 'express';
import UserController from './controllers/UserController';
import TuitController from "./controllers/TuitController";
import mongoose from "mongoose";


const connectionString = "mongodb+srv://krinadankhara:Krina1010@cluster0.natfm.mongodb.net/users?retryWrites=true&w=majority";
mongoose.connect(connectionString);
mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})



const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) =>
    res.send('Hello World!'));

app.get('/add/:a/:b', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));

const tuitController = TuitController.getInstance(app);
const userController = UserController.getInstance(app);
// require('controllers/TuitController')(app);
// require('controllers/UserController')(app);

const PORT = 4000;
app.listen(process.env.PORT || PORT);