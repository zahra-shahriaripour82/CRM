import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../modules/Form";
import { useState } from "react";
import moment from "moment";
import { useRouter } from "next/router";

function CustomerEditPage({ data, id }) {
  const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";
const router=useRouter()
  const notify = () => toast.success("  ویرایش کاربر با موفقیت انجام شد ");
  const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "-",
    address: data.address || "-",
    postalCode: data.postalCode || "-",
    products: data.products || "-",
    date: date || "-",
  });
  const saveHandler = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data.status);
    
    if (data.status === "success"){
      notify()
router.push("/");
    } 
  };

  const cancelHandler = () => {
    router.push("/");
  };
  return (
    <>
      <div className="customer-page">
        <h4>Edit customer</h4>
        <Form form={form} setForm={setForm} />
        <div className="customer-page__buttons">
          <button className="first" onClick={cancelHandler}>
            Cancel
          </button>
          <button className="second" onClick={saveHandler}>
            Edit
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default CustomerEditPage;
