import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
function Home() {
  return (
    <div className="container">
      <h1>Welcome to Nexus360</h1>
      <p>Your trusted consulting partner.</p>
      </div>
  );
}
function Services() {
  return (
    <div className="container">
      <h1>Our Services</h1>
      <div className="card">
        <h2>Web Design</h2>
        <p>Price: ₹10000</p>
        </div>
      <div className="card">
        <h2>SEO</h2>
        <p>Price: ₹5000</p>
      </div>
      <div className="card">
        <h2>Branding</h2>
        <p>Price: ₹8000</p>
      </div>
    </div>
  
  );
}
function About() {
  return (
    <div className="container">
      <h1>About Nexus360</h1>
      <p>We are a consulting firm focused on MSME and Hospital sectors.</p>
      </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <nav style={{
        backgroundColor: "#1B3A6B",
        padding: "15px",
        textAlign: "center",
      }}>
        <Link to="/" style={{
          color: "white",
          margin: "0 20px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>Home</Link>
        <Link to="/services" style={{
          color: "white",
          margin: "0 20px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>Services</Link>
        <Link to="/about" style={{
          color: "white",
          margin: "0 20px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>About</Link>
      </nav>
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/services" element={<Services />} />
           <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
      );
    }

    export default App;




       
