const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});
const cors = require("cors");
const tasks = require('./routes/tasks');


require('./dbConnection')

var corsOptions = {
  origin: '*',
  credentials:  true
}
app.use(cors(corsOptions))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", tasks);

const port = process.env.PORT || 8800;
app.listen(port,()=>console.log(`Server is running on port ${port}`));


module.exports = app;