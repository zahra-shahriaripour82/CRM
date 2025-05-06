import ItemList from "./ItemList"


function Form({form,setForm}) {
  return (
    <div><ItemList form={form} setForm={setForm}/></div>
  )
}

export default Form