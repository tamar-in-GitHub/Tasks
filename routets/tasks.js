const express=require('express');
const routers=express.Router();


const {addTask}=require('../controler/tasks')

routers.post('/',addTask);
// routers.get('/',showAllTasks);
// routers.delete('/:id',deleteTaskById);
// routers.put('/:id,rapist',updateTaskById);

module.exports=routers;