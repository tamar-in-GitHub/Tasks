const mongoose = require('mongoose')

const TasksSchema=new mongoose.Schema({
    taskId:Number,
    taskTypeId:Number,
    taskName:String,
    taskDescription:String,
    rapist:String
})


module.exports=mongoose.model('tasks',TasksSchema)
