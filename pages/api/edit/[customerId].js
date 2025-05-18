import Customer from "@/models/Customer";

export default async function handler(req,res) {
     try{
        await connectDB()
    } 
    catch (err){
        console.log(err);
        res.status(500).json({status:"faild",message:"Error in connecting to DB"})
        return
        
    }
    if(req.method==="PATCH"){
      // get id from query
    const id =req.query.costumerId;
    // get data from front
  const data=req.body.data;

  try{
    const customer= await Customer.findOne({_id:id});
     customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.products;
      customer.updatedAt = Date.now();
      customer.save();
      res.status(200).json({status:"success",data:customer})
  }catch (err) {
      console.log(err.message);
      res.status(500).json({
        status: "failed",
        message: "Error in retrieving data from database",
      });
    
    }
}