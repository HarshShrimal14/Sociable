import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"

import postRoutes from "./routes/posts.js"

const app = express();

require('dotenv').config();
const username= process.env.USERNAME;
const password= process.env.PASSWORD;


app.use(bodyParser.json({ limit : "30mb" , extended : "true"}));
app.use(bodyParser.urlencoded({ limit : "30mb" , extended : "true"}));
app.use(cors());

app.use('/posts' , postRoutes);

const CONNECTION_URL = "mongodb+srv://" +username+ ":" +password + "@cluster0.vgd8gx0.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL)
//   .then(() => app.listen(PORT , () => console.log(`Server Running on Port: ${PORT}`)))
//   .catch((error) => console.log(error.message));

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);

  

