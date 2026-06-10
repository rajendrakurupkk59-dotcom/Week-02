import { useState, useEffect } from "react";
function ServiceCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>
    </div>
  );
}
function Counter() {
    const [count, setCount] = useState(0);
    return (
    <div>
      <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>
          Add One
      </button>
    </div>
  );
}
function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    document.title = "Seconds: " + seconds;
  }, [seconds]);
  return (
    <div>
      <h2>Seconds: {seconds}</h2>
      <button onClick={() => setSeconds(seconds + 1)}>
        Add Second
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Nexus360 Services</h1>
      <ServiceCard name="Web Design" price="10000" />
      <ServiceCard name="SEO" price="5000" />
      <ServiceCard name="Branding" price="8000" />
       <Counter />
       <Timer />
    </div>
    
  );
}
export default App;
