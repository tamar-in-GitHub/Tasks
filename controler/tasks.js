// const { param } = require("express/lib/request");

// const tasksList = [
//     { taskId: '10', taskTypeId: '1', taskName: 'שגיאה בכמות המלאי', taskDescription: 'נתן להזמין מוצר שלא קיים במלאי', rapist: 'Rivka' },
//     { taskId: '11', taskTypeId: '2', taskName: 'שגיאת יתרה', askDescription: 'יש צורך לימחוק יתרה זו', rapist: 'Ayala' },
//     { taskId: '12', taskTypeId: '3', taskName: 'יצירת דף שקיים', taskDescription: 'נסיון ליצור דף כפול', rapist: 'Tamar' },
// ]

// exports.addTasks = (req, res) => {
//     tasksList.push(req.body);
//     res.send(tasksList);
// }

// exports.showAllTasks = (req, res) => {
//     res.send(tasksList);
// }

// exports.deleteTaskById = (req, res) => {
//     const { id } = req.params.id;
//     const index = tasksList.findIndex(x => x.id == id)
//     tasksList.splice(index, 1);
//     res.send(tasksList);
// }

// exports.updateTaskById = (req, res) => {
//     const { id } = req.params.id;
//     const {rapist}=req.params.rapist;
//     tasksList.find(x => x.id == id).rapist=rapist
//     res.send(tasksList);
// }
const Task = require('../models/tasks')

exports.addTask = async(req,res)=>{
    console.log(req.body);
  
    const task = await Task.create(req.body);
    res.json(task)
    
}