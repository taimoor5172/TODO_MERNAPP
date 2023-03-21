const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todo_db").then(() => {
    console.log('connected to MongoDB')
}).catch((err) => console.log(err));