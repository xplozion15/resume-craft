import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
        <p className="logo">Resume<span>Craft</span></p>

        <div className="hero-section">
            <h1>Resume<span>Craft</span>: Your Resume, Done Right – Fast and Easy.</h1>
            <p className="description-paragraph">Create a standout resume effortlessly, with a simple and smooth process that saves you time and lets you focus on what matters most—landing your dream job!</p>
            <button>GET STARTED</button>
        </div>
    </>
  );
}

export default App;
