import { useRef } from "react";
import html2pdf from "html2pdf.js";

function ResumeSection({ personalInfo, education, job, projects, skills }) {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;
    const opt = {
      margin: [10, 25, 10, 0], // Your current margin settings
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        width: element.scrollWidth,
        height: element.scrollHeight,
        windowWidth: 1400, // Decreased from 1200 to make PDF narrower
        windowHeight: 1600,
      },
      jsPDF: {
        unit: "pt",
        format: [500, 700], // Custom PDF size [width, height] in points - narrower than A4
        orientation: "portrait",
        compress: true,
      },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <>
      <button className="download-btn" onClick={handleDownload}>
        Download PDF
      </button>

      <div className="resume-div" ref={resumeRef}>
        <div className="resume-intro-container">
          <h2 className="name">{personalInfo.fullName}</h2>
          <p className="contact-info">
            {personalInfo.phoneNumber} | {personalInfo.email} |{" "}
            {personalInfo.linkedIn} | {personalInfo.github}
          </p>
        </div>

        <div className="education-container">
          <p className="education-title">EDUCATION</p>
          <hr />

          {education.map((element) => {
            return (
              <div className="education-instance-resume" key={element.id}>
                <div className="eduation-instance-resume-left">
                  <p className="education-info-resume college-name">
                    {element.degreeCollege}
                  </p>
                  <p className="education-info-resume degree-name-resume">
                    {element.degreeName}
                  </p>
                </div>
                <div className="eduation-instance-resume-right">
                  <p className="education-info-resume">
                    {element.degreeLocation}
                  </p>
                  <p className="education-info-resume">
                    {element.degreeStartDate}-{element.degreeEndDate}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="resume-experience-container">
          <p className="experience-title">EXPERIENCE</p>
          <hr />

          {job.map((element) => {
            return (
              <div className="experience-instance-resume" key={element.id}>
                <div className="experience-top-div">
                  <div className="experience-instance-resume-left">
                    <p className="experience-resume-text job-role-resume">
                      {element.jobRole}
                    </p>
                    <p className="experience-resume-text">
                      {element.jobCompany}
                    </p>
                  </div>
                  <div className="experience-instance-resume-right">
                    <p className="experience-resume-text">
                      {element.jobStartDate}-{element.jobEndDate}
                    </p>
                    <p className="experience-resume-text">{element.jobPlace}</p>
                  </div>
                </div>

                <ul className="experience-bullet-list">
                  {element.bulletPoints.map((bullet) => {
                    return (
                      <li className="experience-bullets-resume" key={bullet.id}>
                        {bullet.data}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="resume-projects-container">
          <p className="resume-project-title">PROJECTS</p>
          <hr />

          {projects.map((project) => {
            return (
              <div className="resume-project-instance" key={project.projectId}>
                <p className="project-info-text-resume">
                  <span>{project.projectName}</span> | {project.techStack}
                </p>
                <ul className="project-bullets-container-resume">
                  {project.bulletPoints.map((bullet) => {
                    return (
                      <li className="project-li-resume" key={bullet.id}>
                        {bullet.data}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="skills-resume-container">
          <p className="skills-title-resume">SKILLS</p>
          <hr />

          <div className="resume-skill-instance">
            <div className="resume-skill-instance">
              <p className="resume-skill-text">
                <span className="main-skill-resume-text">Languages: </span>
                {skills.languages}
              </p>

              <p className="resume-skill-text">
                <span className="main-skill-resume-text">Frameworks: </span>
                {skills.frameworks}
              </p>

              <p className="resume-skill-text">
                <span className="main-skill-resume-text">
                  Developer Tools:{" "}
                </span>
                {skills.developerTools}
              </p>

              <p className="resume-skill-text">
                <span className="main-skill-resume-text">Libraries: </span>
                {skills.libraries}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ResumeSection };
