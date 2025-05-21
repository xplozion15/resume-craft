
function ResumeSection({ personalInfo, education, job, projects,skills }) {
  return (
    <>
      <div className="resume-div">
        <div className="resume-intro-container">
          <h2 className="name">{personalInfo.fullName}</h2>
          <p className="contact-info">{personalInfo.phoneNumber} | {personalInfo.email} | {personalInfo.linkedIn} | {personalInfo.github}</p>
        </div>


        <div className="education-container">
          <p className="education-title">EDUCATION</p>
          <hr />

          {education.map(element => {
            return <>
              <div className="education-instance-resume">
                <div className="eduation-instance-resume-left">
                  <p className="education-info-resume college-name">{element.degreeCollege}</p>
                  <p className="education-info-resume degree-name-resume">{element.degreeName}</p>
                </div>
                <div className="eduation-instance-resume-right">
                  <p className="education-info-resume">{element.degreeLocation}</p>
                  <p className="education-info-resume">{element.degreeStartDate}-{element.degreeEndDate}</p>
                </div>
              </div>

            </>
          })}

        </div>

        <div className="resume-experience-container">
          <p className="experience-title">EXPERIENCE</p>
          <hr />

          {job.map((element) => {
            return <>
              <div className="experience-instance-resume">
                <div className="experience-top-div">
                  <div className="experience-instance-resume-left">
                    <p className="experience-resume-text job-role-resume">{element.jobRole}</p>
                    <p className="experience-resume-text">{element.jobCompany}</p>
                  </div>
                  <div className="experience-instance-resume-right">
                    <p className="experience-resume-text">{element.jobStartDate}-{element.jobEndDate}</p>
                    <p experience-resume-text className="experience-resume-text">{element.jobPlace}</p>
                  </div>
                </div>


                <ul className="experience-bullet-list">
                  {element.bulletPoints.map((bullet) => {
                    return <>
                      <li className="experience-bullets-resume">{bullet.data}</li>
                    </>
                  })}
                </ul>

              </div>
            </>



          })}

        </div>

        <div className="resume-projects-container">
          <p className="resume-project-title">PROJECTS</p>
          <hr />

          {projects.map((project) => {
            return <>
              <div className="resume-project-instance">
                    <p className="project-info-text-resume"><span>{project.projectName}</span> | {project.techStack}</p>
                    <ul>
                        {project.bulletPoints.map((bullet)=>{
                      return <>
                          <li className="project-li-resume">{bullet.data}</li>
                      </>
                    })}
                    </ul> 
              </div>
            </>

          })}

        </div>
        
        <div className="skills-resume-container">
            <p className="skills-title-resume">SKILLS</p>
            <hr />

            <div className="resume-skill-instance">
              <div className="resume-skill-instance">
                    <p className="resume-skill-text"><span className="main-skill-resume-text">Languages: </span>{skills.languages}</p>

                <p className="resume-skill-text"><span className="main-skill-resume-text">Frameworks: </span>{skills.frameworks}</p>

                <p className="resume-skill-text"><span className="main-skill-resume-text">Developer Tools: </span>{skills.developerTools}</p>

                <p className="resume-skill-text"><span className="main-skill-resume-text">Libraries: </span>{skills.libraries}</p>
              </div>
                

            </div>
          
        </div>

      </div>



    </>
  );
}

export { ResumeSection };
