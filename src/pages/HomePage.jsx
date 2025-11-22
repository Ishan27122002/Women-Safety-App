// src/pages/HomePage.jsx
import { useState, useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  const [backendMessage, setBackendMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://localhost:5000/") // backend running at port 5000
      .then((res) => setBackendMessage(res.data))
      .catch((err) => {
        console.error("Error:", err);
        setBackendMessage("Error connecting to backend");
      });
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the Women Safety App</p>
      <p>Backend says: {backendMessage}</p>
    </div>
  );
}
