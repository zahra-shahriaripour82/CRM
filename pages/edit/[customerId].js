import CustomerEditPage from "@/components/templates/CustomerEditPage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function index() {
  const [data, setData] = useState(null);

  const router = useRouter();

  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [isReady]);
  console.log(data);

  if (data) return <CustomerEditPage data={data} id={customerId} />;
}

export default index;
