import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";


export default async function handler (req,res) {
    try{
        await connectDB()
    }
    catch (err){
        console.log(err);
        res.status(500).json({status:"faild",message:"Error in connecting to DB"})
        return
        
    }
    if(req.method === "POST"){
      const body = await req.json();
const data = body.data;
        console.log(data);
        
        if (!data.name || !data.lastName || !data.email)
            return res
              .status(400)
              .json({ status: "failed", message: "Invalid data" });

              try{
                const customer=await Customer.create(data);
              return res.status(201).json({status:"success",message:"Data Created",data:customer})
              }
              catch(err){
            console.log(err);
            res.status(500).json({status:"failed",message:"Error in storing data"})
            
              }
    }
}