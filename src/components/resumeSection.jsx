import { InfoSection } from "./infoSection.jsx";
import { latestStatesInfoObject } from "./infoSection.jsx";

function ResumeSection() {
  return (
    <>
      <div className="resume-div">
        <div className="resume-intro-container">
            <h2 className="name">{latestStatesInfoObject.personalInformation.fullName}</h2>
            <p className="contact-info">123-456-7890 | orangecatto@fish.edu | linkedin.com/in/orangecar | github.com/orange</p>
        </div>

        <div className="education-container">
            <p className="education-title">EDUCATION</p>
            <hr />
        </div>
      </div>
    </>
  );
}

export { ResumeSection };
