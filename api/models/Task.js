const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            min: 4,
            max: 12
        },
        status:{
            type: String,
            required: true
        },
        creationTime:{
            type: Date,
            
        },

        completedTime:{
            type: Date
        }
        
    }
)
module.exports = mongoose.model("Task", taskSchema);