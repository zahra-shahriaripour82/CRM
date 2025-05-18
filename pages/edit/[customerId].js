import CustomerEditPage from "@/components/templates/CustomerEditPage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function index() {
  const [data, setData] = useState();
  const router = useRouter();
  console.log(router);
  
  const {
    query: { customerId },
    isReady,
  } = router;
useEffect(()=>{ if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data))
        .catch((error) => console.error('خطا در واکشی داده:', error));
    }},[isReady])
   if (data) return <CustomerEditPage data={data} id={customerId} />;
}

export default index;
