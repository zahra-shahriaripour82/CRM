import { useState } from "react";
import FormInput from "./FormInput";
import ItemList from "./ItemList";

const formFields = [
  { name: "name", label: "Name", type: "text" },
  { name: "lastName", label: "Last Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "address", label: "Address", type: "text" },
  { name: "postalCode", label: "Postal Code", type: "text" },
  { name: "date", label: "Date", type: "date" },
];
function Form({ form, setForm }) {

  console.log("form",form);
  
  const changeHandler = (e) => {
   
    
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      {formFields.map((field) => (
        <FormInput
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
          value={form[field.name]}
          onChange={changeHandler}
         
        />
      ))}
      <ItemList form={form} setForm={setForm} />
    </div>
  );
}

export default Form;
