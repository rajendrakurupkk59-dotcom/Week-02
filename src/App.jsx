import { useState, useEffect } from "react";
import "./App.css";
function ClientCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
      <p>City: {props.address.city}</p>
      <p>Company: {props.company.name}</p>
     </div>

  );
}
function App() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
useEffect(() => {
  async function fetchClients() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
let data = await response.json();
setClients(data);
setLoading(false);
    } catch (error) {
      console.log("Error:", error.message);
      setLoading(false);
    }
  }
  fetchClients();
}, []);
if (loading) {
  return <h2>Loading clients...</h2>;

}
return (
  <div className="container">
    <h1>Nexus360 Client List</h1>
    {clients.map(client => (
      <ClientCard
      key={client.id}
      name={client.name}
      email={client.email}
      address={client.address}
      company={client.company}
    />
    ))}
</div>
);
}
export default App;
