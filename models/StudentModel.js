const mongoose =require("mongoose");
 
const StudentSchema = new mongoose.Schema({
    firstName:{
      type:String,
      required:true,
    },
    lastName:{
        type:String,
        required:true,
      },
      motherName:{
        type:String,
        required:true,
      },
      fatherName:{
        type:String,
        required:true,
      },
      address:{
        type:String,
        required:true,
      },
      mobile:{
        type:String,
        required:true,
      }
})
module.exports=mongoose.model("student",StudentSchema);
