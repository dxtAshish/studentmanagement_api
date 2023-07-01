const express=require('express');

const student = require('../models/StudentModel');

const router = express.Router() 
router.put('/:id', async(request,response)=>{
    const {firstName,lastName,motherName,fatherName,address,mobile} = request.body
     const newStudent={};
     if(firstName){newStudent.firstName=firstName}
     if(lastName){newStudent.lastName=lastName}
     if(motherName){newStudent.motherName=motherName}
     if(fatherName){newStudent.fatherName=fatherName}
     if(address){newStudent.address=address}
     if(mobile){newStudent.mobile=mobile}

     let Student=student.findById(request.params.id)
     if(!Student)
     {
        return response.status(404).send("not found")
     }
     Student=await student.findByIdAndUpdate(request.params.id ,{$set: newStudent},{new:true})
     response.json({Student})


})
module.exports=router;