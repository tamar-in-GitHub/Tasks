// const express =require('express');

// const tasksRouters=require('./routets/tasks')
// const app=express();

// app.use(express.json());


// const LoggerMiddlware=(req,res,next)=>{
//     console.log(`Logger ${req.url} ${req.method}--`)
//     next()
// }
// app.use(LoggerMiddlware)

// app.use('/tasks',tasksRouters);

// app.listen(3000,()=>{
//     console.log("listen in port 8000");
// })
const express = require('express')
const mongoose = require('mongoose')
 const tasksRouters=require('./routets/tasks')
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.json());
 app.use('/tasks',tasksRouters);

 CONECTION_URL='mongodb+srv://t0533169540:vxWpwBYPthNYooDk@cluster0.xlt3b8c.mongodb.net/?retryWrites=true&w=majority'
const PORT=process.env.PORT || 5000;


mongoose.connect(CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
    .catch((error)=>console.log(error.message));


// app.use(express.json());





