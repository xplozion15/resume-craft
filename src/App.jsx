import "./App.css";
import "./index.css";
import { HeroSection } from "./components/heroSection.jsx";
import { useState } from "react";
import { InfoSection } from "./components/infoSection.jsx";
import { ResumeSection } from "./components/resumeSection.jsx";

function App() {
  
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
      <p className="logo">
        Resume<span>Craft</span>
      </p>
      {buttonClicked ? <div className="main-container">
            <InfoSection/>
            <ResumeSection/>
      </div> : <div className="hero-container">
        <HeroSection onButtonClick={()=>setButtonClicked(true)}/>
      </div>}
    </>
  );
}

export default App;
