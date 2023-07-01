const express= require('express');
const mongoose=require('mongoose');
const cors = require("cors")

const app= express();

app.use(cors())
mongoose.connect("mongodb://localhost:27017/studentlist",{
    useNewUrlParser:true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("db is connected")
})
.catch((err)=>{
    console.log(err.message);
})

app.use(express.json())


//availble route
app.use('/api/studentadd',require('./routes/studentadd'))
app.use('/api/getstudent',require('./routes/getStudent'))
app.use('/api/updatestudent',require('./routes/updateStudent'))
app.use('/api/deletestudent',require('./routes/deleteStudent'))

app.listen(5000 ,()=>{
    console.log("server statred on port 5000")
})
