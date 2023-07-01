const express=require('express');

const student = require('../models/StudentModel');
const router = express.Router() 
router.get('/', async(request,response)=>{
        try{
            const response_student = await student.find({})
            console.log(response_student,"here6")
            if(response_student){
                return response.json({
                    status:200,
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
     } ) 
     module.exports=router;