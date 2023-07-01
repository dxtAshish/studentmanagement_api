const express=require('express');
const student = require('../models/StudentModel');
const router = express.Router() 

router.post('/',async(request,response)=>{
    try{
        const {firstName,lastName,motherName,fatherName,address,mobile} = request.body
        
        const response_student = await student.create({
            firstName:firstName,
            lastName:lastName,
            motherName:motherName,
            fatherName:fatherName,
            address:address,
            mobile:mobile,
            
        })
        if(response_student){
            return response.json({
                status:201,
                data:response_student,
                message:"successfully added"
            })
        }
        return response.json({
            status:402,
            message:"unable to progress"
        })
    }catch(err){
        return response.json({
            status:500,
            message:"server error"+err
        })
    }
})



////////////




module.exports=router