import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import mongoose  from "mongoose";
//import connectDB from './mongodb/connect.js'
//import postRoutes from './routes/postRoutes.js'

dotenv.config();




const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const emailSchema = new mongoose.Schema({
  email: String
});

const Email = mongoose.model('Email', emailSchema);

app.post('/emails', async (req, res) => {
  const newEmail = new Email({ email: req.body.email });

  try {
    await newEmail.save();
    res.status(201).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => console.log('Server is running on port 5000'));




/*
const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}))
app.get('/', async(req,res) => {
    res.send('Welcome to My-AId');
})

app.use('/api/v1/post', postRoutes)



const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
    } catch(error){
        console.log(error)
    }    
}

startServer(); 

*/
