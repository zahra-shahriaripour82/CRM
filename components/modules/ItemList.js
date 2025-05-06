import FormInput from "./FormInput";

function ItemList({ form, setForm }) {
  const { products } = form;
  const addHnadler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };
  const changeHandler = () => {};
  const deleteHandler=()=>{};
  return (
    <div className="form-input__list" >
      <p>Purchased products</p>
      {products.map((product) => (
        <div>
          <FormInput
           name="name"
           label="Product Name"
           type="text"
           value={product.name}
           onChange={changeHandler}
          />
          <div>
            <FormInput
              name="price"
              label={"Price"}
              type={"text"}
              value={product.name}
              onChange={changeHandler}
            />
             <FormInput
            name="qty"
            label="Qty"
            type="number"
            value={product.qty}
            onChange={changeHandler}
            />
          </div>
          <button onClick={deleteHandler}>Remove</button>
        </div>
      ))}
      <button onClick={addHnadler}>Add Item</button>
    </div>
  );
}

export default ItemList;
