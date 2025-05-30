
import HomePage from "@/components/templates/HomePage";
import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";



export default function index({customers}) {
  console.log("data",customers);
  
  return (

  
     
 <HomePage customers={customers}/>
    
  )
}


export async function getServerSideProps() {
  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}