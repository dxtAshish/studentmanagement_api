const express=require('express');

const student = require('../models/StudentModel');

const router = express.Router() 
router.delete('/:id', async(request,response)=>{
    const {firstName,lastName,motherName,fatherName,address,mobile} = request.body
try {
    let Student=student.findById(request.params.id)
    if(!Student)
    {
       return response.status(404).send("not found")
    }
    Student=await student.findByIdAndDelete(request.params.id)
    response.json({"success":"student has been deleted"})
} catch (error) {
    console.error(error.message)
    response.status(500).send("not allowed")
}
    
})
module.exports=router;