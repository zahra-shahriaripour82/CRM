import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "faild", message: "Error in connecting to DB" });
    return;
  }
  if (req.method === "GET") {
    const id = req.query.comstumerId;
    try {
      const customer = await Customer.findOne({ _id: id });
      //send data for front
      res.status(200).json({ status: "success", data: customer });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({
        status: "failed",
        message: "Error in retrieving data from database",
      });
    }
  }
}
