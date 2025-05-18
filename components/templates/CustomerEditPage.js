

function CustomerEditPage({data,id}) {
      const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "-",
    address: data.address || "-",
    postalCode: data.postalCode || "-",
    products: data.products || "-",
    date: date,
  });
  return (
    <div>CustomerEditPage</div>
  )
}

export default CustomerEditPage