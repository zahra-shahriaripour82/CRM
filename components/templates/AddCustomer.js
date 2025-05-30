
import { useState } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddCustomer() {
  const notify = () => toast.success("کاربر با موفقیت اضافه شد");
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });

  const saveHandler = async () => {
    
    const res = await fetch("/api/customer", {
      method: "POST",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") {
      notify();
      router.push("/");
    }
}
    const cancelHandler = () => {
      setForm({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        postalCode: "",
        date: "",
        products: [],
      });
      router.push("/");
    };

    return (
      <>
        <div className="customer-page">
          <h4>Add New Customer</h4>
          <Form form={form} setForm={setForm} />
          <div className="customer-page__buttons">
            <button className="first" onClick={cancelHandler}>
              Cancel
            </button>
            <button className="second" onClick={saveHandler}>
              Save
            </button>
          </div>
        </div>
        <ToastContainer />
      </>
    );
  };

export default AddCustomer;
