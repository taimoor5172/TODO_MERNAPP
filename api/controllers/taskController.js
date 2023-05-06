const Task = require("../models/Task");
module.exports= {
    addTask: async (req, res)=>{
        const {title , status} = req.body
        if(!title || !status){
          return res.status(400).json({message:"Please Enter Title and Status"});
        }
        const statusCheck = status.toLowerCase();
        const currentTime = Date.now();
        let completedTime;
        if (statusCheck === 'completed' || statusCheck === 'complete'){
          completedTime = currentTime
        }
        else{
          completedTime =  null;
        }
        const newTask = new Task({
          title,
          status,
          completedTime,
          creationTime:currentTime,
        });
        try {
          const addedTask = await newTask.save();
          res.status(200).json({message:"Task added successfully",id:addedTask._id});
          }
          catch (err) {
            res.status(500).json(err);
          }
        },
      
      // get all tasks
    getTasks: async(req, res) => {
        try{
            const tasks = await Task.find();
            res.status(200).json(tasks);
        }
        catch (err) {
            res.status(500).json(err);
        }
    
    },
      
      
      // update a task
      
    updateTask: async (req, res) => {
      const {id, title , status} = req.body
      if(!title || !status){
        return res.status(400).json({message:"Please Enter Title and Status"});
      }
      const statusCheck = status.toLowerCase();
      const currentTime = Date.now();
      let completedTime;
      if (statusCheck === 'completed' || statusCheck === 'complete' || statusCheck === 'Completed' ){
        completedTime = currentTime
      }
      else{
        completedTime =  null;
      }
      try {
        const updated = await Task.findByIdAndUpdate({_id:id},{$set: {
          title,
          status,
          completedTime,
          }
      })
      if(updated){
        return res.status(200).json({message:"Task updated successfully"})
      }
      else{
        return res.status(400).json({message:"Task not updated"})
      }
    
    }
      catch (err) {
        res.status(500).json(err);
      }
      },
      
      
      
      // delete a task
    deleteTask: async (req, res)=> {
        try{
            const deletedTask = await Task.findByIdAndDelete(req.params.id);
            if(deletedTask){
              res.status(200).json({message:"Task has been deleted"});
            }
            else{
              res.status(400).json({message:"Task not found"});
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
      
      
      // get a task 
    getTask: async (req, res)=> {
    try{
        const task = await Task.findById(req.params.id);
        if (task) {
        res.status(200).json(task);
        }
        else{
        res.status(400).json({message:"Task not found"});
        };
    }
    catch (err) {
        res.status(500).json(err);
    }
    }
}