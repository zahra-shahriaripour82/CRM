import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req,res){
    try{
        await connectDB()
    } 
    catch (err){
        console.log(err);
        res.status(500).json({status:"faild",message:"Error in connecting to DB"})
        return
        
    }
    if(req.method==="DELETE") {
        // get customer id from query 
        const id =req.query.customerId;
        try{
await Customer.deleteOne({_id:id})
res.status(201).json({status:"success",message:"Data Deleted"})

        }
        catch(err){
        console.log(err.message);
res.status(500).json({status:"faild",message:"Error in connecting to database"})
        
        }
    }
}
 