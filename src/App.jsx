import "./App.css";
import "./index.css";
import { HeroSection } from "./components/heroSection.jsx";
import { useState } from "react";
import { InfoSection } from "./components/infoSection.jsx";
import { ResumeSection } from "./components/resumeSection.jsx";

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Orange Cat",
    phoneNumber: "00070707070",
    email: "orangecat@gmail.com",
    linkedIn: "orangecatto15",
    github: "orangecatcodes",
  });

  const [education, setCurrentEducation] = useState([
    {
      id: self.crypto.randomUUID(),
      degreeNumber: 0,
      degreeName: "Bachelor of Technology in Computer Science",
      degreeLocation: "Mumbai",
      degreeCollege: "Indian Institute of Technology Mumbai",
      degreeStartDate: "August 2017",
      degreeEndDate: "May 2021",
    },
    {
      id: self.crypto.randomUUID(),
      degreeNumber: 1,
      degreeName: "Master of Technology in Computer Science",
      degreeLocation: "Mumbai",
      degreeCollege: "Indian Institute of Technology Mumbai",
      degreeStartDate: "July 2021",
      degreeEndDate: "June 2023",
    },
  ]);

  const [job, setCurrentJob] = useState([
    {
      id: self.crypto.randomUUID(),
      jobNumber: 0,
      jobRole: "Software Engineer Intern",
      jobCompany: "ZypherSoft Pvt Ltd",
      jobPlace: "Hybrid",
      jobStartDate: "January 2024",
      jobEndDate: "July 2024",
      bulletPoints: [
        {
          id: self.crypto.randomUUID(),
          data: "Built internal tools using Node.js and Express to automate reporting tasks.",
        },
        {
          id: self.crypto.randomUUID(),
          data: "Contributed to code reviews and participated in daily Agile stand-ups.",
        },
        {
          id: self.crypto.randomUUID(),
          data: "Wrote unit tests with Jest to ensure reliability and reduce bugs in production.",
        },
      ],
    },

    {
      id: self.crypto.randomUUID(),
      jobNumber: 1,
      jobRole: "Junior Full Stack Developer",
      jobCompany: "BrightPixel Technologies",
      jobPlace: "On-site",
      jobStartDate: "August 2024",
      jobEndDate: "Present",
      bulletPoints: [
        {
          id: self.crypto.randomUUID(),
          data: "Implemented new features across the stack using React, Node.js, and PostgreSQL.",
        },
        {
          id: self.crypto.randomUUID(),
          data: "Worked closely with product designers to improve user workflows.",
        },
        {
          id: self.crypto.randomUUID(),
          data: "Maintained deployment pipelines and resolved production issues promptly.",
        },
      ],
    },

    {
      id: self.crypto.randomUUID(),
      jobNumber: 2,
      jobRole: "Frontend Developer Intern",
      jobCompany: "TechNova Solutions",
      jobPlace: "Remote",
      jobStartDate: "June 2023",
      jobEndDate: "December 2023",
      bulletPoints: [
        {
          id: self.crypto.randomUUID(),
          data: "Developed and maintained responsive UI components using React.js.",
        },
        {
          id: self.crypto.randomUUID(),
          data: "Improved page load times by 30% through performance optimization techniques.",
        },
        {
          id: self.crypto.randomUUID(),
          data: "Collaborated with backend engineers to integrate RESTful APIs seamlessly.",
        },
      ],
    },
  ]);

  const [projects, setProjects] = useState([
    {
      projectNumber: 0,
      projectId: self.crypto.randomUUID(),
      projectName: "DevDeck",
      techStack: "Node.js, Express, React, MongoDB, Docker",
      bulletPoints: [
        {
          id: self.crypto.randomUUID(),
          data: "Built a developer-focused dashboard to track GitHub stats, pull requests, and activity feed using GitHub API.",
        },
        {
          id: self.crypto.randomUUID(),
          data: "Implemented secure authentication with JWT and integrated real-time notifications using Socket.io.",
        },
      ],
      startDate: "January 2024",
      endDate: "March 2024",
    },
    {
      id: self.crypto.randomUUID(),
      projectNumber: 1,
      projectId: self.crypto.randomUUID(),
      projectName: "TaskHive",
      techStack: "Node.js, Express, React, PostgreSQL, Prisma, Redis",
      bulletPoints: [
        {
          id: self.crypto.randomUUID(),
          data: "Designed and implemented a Trello-like productivity app with drag-and-drop tasks and team collaboration.",
        },
        {
          id: self.crypto.randomUUID(),
          data: "Used Redis for caching frequently accessed data and Prisma ORM for clean database access patterns.",
        },
      ],
      startDate: "April 2024",
      endDate: "May 2024",
    },
  ]);

  const [skills, setSkills] = useState({
    languages: "Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R",
    frameworks: "React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI",
    developerTools:
      "Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm",
    libraries: "pandas, NumPy, Matplotlib",
  });

  return (
    <>
      <p className="logo">
        Resume<span>Craft</span>
      </p>
      {buttonClicked ? (
        <div className="main-container">
          <InfoSection
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
            education={education}
            setCurrentEducation={setCurrentEducation}
            job={job}
            setCurrentJob={setCurrentJob}
            projects={projects}
            setProjects={setProjects}
            skills={skills}
            setSkills={setSkills}
          />
          <ResumeSection
            personalInfo={personalInfo}
            education={education}
            job={job}
            projects={projects}
            skills={skills}
          />
        </div>
      ) : (
        <div className="hero-container">
          <HeroSection onButtonClick={() => setButtonClicked(true)} />
        </div>
      )}
    </>
  );
}

export default App;
