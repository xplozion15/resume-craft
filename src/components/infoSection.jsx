import { use, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faTrashCan,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

function InfoSection({
  personalInfo,
  setPersonalInfo,
  education,
  setCurrentEducation,
  job,
  setCurrentJob,
  projects,
  setProjects,
  skills,
  setSkills,
}) {
  const sections = ["intro", "education", "experience", "projects", "skills"];
  const [currentSection, setCurrentSection] = useState(0);
  const [currentDegreeIndex, setCurrentDegreeIndex] = useState(0);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  function onSkillsChange(event) {
    const originalObject = skills;
    const clonedObject = JSON.parse(JSON.stringify(originalObject));

    clonedObject[event.target.name] = event.target.value;

    setSkills(clonedObject);
  }

  function onNextJobButton() {
    setCurrentJobIndex(currentJobIndex + 1);
  }

  function onBackJobButton() {
    setCurrentJobIndex(currentJobIndex - 1);
  }

  function onJobPlusClick() {
    setCurrentJob((prev) => {
      const newDegreeIndex = prev.length;

      return [
        ...prev,
        {
          id: self.crypto.randomUUID(),
          jobNumber: newDegreeIndex,
          jobRole: "",
          jobCompany: "",
          jobPlace: "",
          jobStartDate: "",
          jobEndDate: "",
          bulletPoints: [
            {
              id: self.crypto.randomUUID(),
              data: "",
            },
          ],
        },
      ];
    });
    setCurrentJobIndex(currentJobIndex + 1);
  }

  function deleteJobHandler() {
    let updatedJob = [...job];
    updatedJob = updatedJob.filter((job) => {
      return job.jobNumber !== currentJobIndex;
    });

    updatedJob = updatedJob.map((job, index) => ({
      ...job,
      jobNumber: index,
    }));

    // Adjust the current index
    let newIndex = currentJobIndex;
    if (currentJobIndex >= updatedJob.length) {
      newIndex = updatedJob.length - 1;
    }
    console.log(updatedJob);
    setCurrentJobIndex(newIndex);
    setCurrentJob(updatedJob);
  }

  function onProjectChangeHandler(event) {
    const updatedProjects = structuredClone(projects);
    let updatedObject = { ...updatedProjects[currentProjectIndex] };
    updatedObject[event.target.name] = event.target.value;
    updatedProjects[currentProjectIndex] = updatedObject;
    setProjects(updatedProjects);
  }

  function addProjectBulletHandler() {
    const updatedArray = structuredClone(projects);
    const bulletPointsArray = updatedArray[currentProjectIndex].bulletPoints;
    const updatedBulletPointsArray = [
      ...bulletPointsArray,
      {
        id: self.crypto.randomUUID(),
        data: "",
      },
    ];
    updatedArray[currentProjectIndex].bulletPoints = updatedBulletPointsArray;
    setProjects(updatedArray);
    console.log(projects);
  }

  function onNextProjectClick() {
    setCurrentProjectIndex(currentProjectIndex + 1);
  }

  function onPrevProjectClick() {
    setCurrentProjectIndex(currentProjectIndex - 1);
  }

  function onAddProjectClick() {
    const clonedArray = structuredClone(projects);
    clonedArray.push({
      projectNumber: currentProjectIndex + 1,
      projectId: self.crypto.randomUUID(),
      projectName: "",
      techStack: "",
      bulletPoints: [],
      startDate: "",
      endDate: "",
    });
    setProjects(clonedArray);
    setCurrentProjectIndex(currentProjectIndex + 1);
  }

  function onJobChangeHandler(event) {
    let updatedJob = structuredClone(job);
    // let updatedJob = [...job];
    let updatedObject = { ...updatedJob[currentJobIndex] };
    updatedObject[event.target.name] = event.target.value;
    updatedJob[currentJobIndex] = updatedObject;
    setCurrentJob(updatedJob);
  }

  function addJobBulletHandler() {
    const updatedArray = structuredClone(job);
    const bulletPointsArray = updatedArray[currentJobIndex].bulletPoints;
    const updatedBulletPointsArray = [
      ...bulletPointsArray,
      {
        id: self.crypto.randomUUID(),
        data: "",
      },
    ];
    updatedArray[currentJobIndex].bulletPoints = updatedBulletPointsArray;
    setCurrentJob(updatedArray);
    console.log(job);
  }

  function onPersonalInfoChangeHandler(event) {
    setPersonalInfo({
      ...personalInfo,
      [event.target.name]: event.target.value,
    });
  }

  function onEducationChangeHandler(event) {
    let updatedEducation = [...education];
    let updatedObject = { ...updatedEducation[currentDegreeIndex] };
    updatedObject[event.target.name] = event.target.value;
    updatedEducation[currentDegreeIndex] = updatedObject;
    setCurrentEducation(updatedEducation);
  }

  function onNextDegreeButton() {
    setCurrentDegreeIndex(currentDegreeIndex + 1);
  }

  function onBackDegreeButton() {
    setCurrentDegreeIndex(currentDegreeIndex - 1);
  }

  function onEducationPlusClick() {
    setCurrentEducation((prev) => {
      const newDegreeIndex = prev.length;
      return [
        ...prev,
        {
          id: self.crypto.randomUUID(),
          degreeNumber: newDegreeIndex,
          degreeName: "",
          degreeLocation: "",
          degreeCollege: "",
          degreeStartDate: "",
          degreeEndDate: "",
        },
      ];
    });
    setCurrentDegreeIndex(currentDegreeIndex + 1);
  }

  function onDeleteProjectClick() {
    let updatedProjects = [...projects];
    updatedProjects = updatedProjects.filter((project) => {
      return project.projectNumber !== currentProjectIndex;
    });

    updatedProjects = updatedProjects.map((project, index) => ({
      ...project,
      projectNumber: index,
    }));

    // Adjust the current index
    let newIndex = currentProjectIndex;
    if (currentProjectIndex >= updatedProjects.length) {
      newIndex = updatedProjects.length - 1;
    }
    console.log(updatedProjects);
    setCurrentProjectIndex(newIndex);
    setProjects(updatedProjects);
  }

  function deleteDegreeHandler() {
    let updatedEducation = [...education];
    updatedEducation = updatedEducation.filter((degree) => {
      return degree.degreeNumber !== currentDegreeIndex;
    });

    updatedEducation = updatedEducation.map((degree, index) => ({
      ...degree,
      degreeNumber: index,
    }));

    // Adjust the current index
    let newIndex = currentDegreeIndex;
    if (currentDegreeIndex >= updatedEducation.length) {
      newIndex = updatedEducation.length - 1;
    }
    console.log(updatedEducation);
    setCurrentDegreeIndex(newIndex);
    setCurrentEducation(updatedEducation);
  }

  return (
    <>
      <div className="info-div">
        <div className="title-div">
          <p className="current-section-title">{sections[currentSection]}</p>
          <div className="buttons-div">
            <div className="previous-button-div">
              {currentSection !== 0 && (
                <button
                  className="previous-button"
                  onClick={() => {
                    setCurrentSection(currentSection - 1);
                  }}
                >
                  Previous
                </button>
              )}
            </div>

            <div className="next-button-div">
              {currentSection < sections.length - 1 && (
                <button
                  className="next-button"
                  onClick={() => {
                    setCurrentSection(currentSection + 1);
                  }}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="intro-form">
          {currentSection === 0 ? (
            <>
              <div className="intro-form-container">
                <div className="form-element-div form-element-intro-div">
                  <label htmlFor="full-name">Full name?</label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-element-intro-input"
                    value={personalInfo.fullName}
                    onChange={onPersonalInfoChangeHandler}
                  />
                </div>

                <div className="form-element-div form-element-intro-div">
                  <label htmlFor="phone-number">Phone number?</label>
                  <input
                    type="number"
                    className="form-element-intro-input"
                    name="phoneNumber"
                    value={personalInfo.phoneNumber}
                    onChange={onPersonalInfoChangeHandler}
                  />
                </div>

                <div className="form-element-div form-element-intro-div">
                  <label htmlFor="email">Email id?</label>
                  <input
                    type="text"
                    className="form-element-intro-input"
                    name="email"
                    value={personalInfo.email}
                    onChange={onPersonalInfoChangeHandler}
                  />
                </div>

                <div className="form-element-div form-element-intro-div">
                  <label htmlFor="linkedin">LinkedIn</label>
                  <input
                    type="text"
                    className="form-element-intro-input"
                    name="linkedIn"
                    value={personalInfo.linkedIn}
                    onChange={onPersonalInfoChangeHandler}
                  />
                </div>

                <div className="form-element-div form-element-intro-div">
                  <label htmlFor="github">GitHub</label>
                  <input
                    type="text"
                    className="form-element-intro-input"
                    name="github"
                    value={personalInfo.github}
                    onChange={onPersonalInfoChangeHandler}
                  />
                </div>
              </div>
            </>
          ) : null}

          {currentSection === 1 ? (
            <>
              <div className="education-navigation-div">
                {currentDegreeIndex === education.length - 1 &&
                  education.length < 3 && (
                    <FontAwesomeIcon
                      icon={faSquarePlus}
                      size="2xl"
                      className="add-degree degree-navigation-buttons"
                      onClick={onEducationPlusClick}
                    />
                  )}

                {currentDegreeIndex !== 0 && (
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    size="2xl"
                    className="prev-degree degree-navigation-buttons"
                    onClick={onBackDegreeButton}
                  />
                )}

                {currentDegreeIndex !== education.length - 1 && (
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="2xl"
                    className="next-degree degree-navigation-buttons"
                    onClick={onNextDegreeButton}
                  />
                )}

                {education.length > 1 && (
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    size="2xl"
                    className="delete-degree degree-navigation-buttons"
                    onClick={deleteDegreeHandler}
                  />
                )}
              </div>

              <p className="degree-number-title">
                Degree number {education[currentDegreeIndex].degreeNumber}
              </p>

              <div className="education-form-container">
                <div className="form-element-div form-element-education-div">
                  <label htmlFor="degreeCollege">College name</label>
                  <input
                    type="text"
                    name="degreeCollege"
                    className="form-element-education-input"
                    value={education[currentDegreeIndex].degreeCollege}
                    onChange={onEducationChangeHandler}
                  />
                </div>

                <div className="form-element-div form-element-education-div">
                  <label htmlFor="degreeName">Degree name?</label>
                  <input
                    type="text"
                    name="degreeName"
                    className="form-element-education-input"
                    value={education[currentDegreeIndex].degreeName}
                    onChange={onEducationChangeHandler}
                  />
                </div>

                <div className="form-element-div form-element-education-div">
                  <label htmlFor="degreeLocation">Location</label>
                  <input
                    type="text"
                    name="degreeLocation"
                    className="form-element-education-input"
                    value={education[currentDegreeIndex].degreeLocation}
                    onChange={onEducationChangeHandler}
                  />
                </div>

                <div className="form-element-div form-element-education-div">
                  <label htmlFor="degreeStartDate">degree start date?</label>
                  <input
                    type="text"
                    name="degreeStartDate"
                    className="form-element-education-input"
                    value={education[currentDegreeIndex].degreeStartDate}
                    onChange={onEducationChangeHandler}
                  />
                </div>

                <div className="form-element-div form-element-education-div">
                  <label htmlFor="degreeEndDate">Degree end date?</label>
                  <input
                    type="text"
                    name="degreeEndDate"
                    className="form-element-education-input"
                    value={education[currentDegreeIndex].degreeEndDate}
                    onChange={onEducationChangeHandler}
                  />
                </div>
              </div>
            </>
          ) : null}

          {currentSection === 2 ? (
            <>
              <div className="job-navigation-div">
                {currentJobIndex === job.length - 1 && currentJobIndex < 3 && (
                  <FontAwesomeIcon
                    icon={faSquarePlus}
                    size="2xl"
                    className="add-job job-navigation-buttons"
                    onClick={onJobPlusClick}
                  />
                )}

                {currentJobIndex !== 0 && (
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    size="2xl"
                    className="prev-job job-navigation-buttons"
                    onClick={onBackJobButton}
                  />
                )}

                {currentJobIndex !== job.length - 1 && (
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="2xl"
                    className="next-job job-navigation-buttons"
                    onClick={onNextJobButton}
                  />
                )}

                {job.length > 1 && (
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    size="2xl"
                    className="delete-job job-navigation-buttons"
                    onClick={deleteJobHandler}
                  />
                )}
              </div>

              <p className="job-number-title">
                Job number {job[currentJobIndex].jobNumber}
              </p>

              <div className="form-element-experience-container">
                <div className="form-element-div form-element-div-experience">
                  <label htmlFor="jobRole">Job Role</label>
                  <input
                    type="text"
                    name="jobRole"
                    value={job[currentJobIndex].jobRole}
                    onChange={onJobChangeHandler}
                  />
                </div>

                <div className="form-element-div form-element-div-experience">
                  <label htmlFor="jobCompany">Job Company</label>
                  <input
                    type="text"
                    name="jobCompany"
                    value={job[currentJobIndex].jobCompany}
                    onChange={onJobChangeHandler}
                  />
                </div>

                <div className="form-element-div form-element-div-experience">
                  <label htmlFor="jobPlace">Job place</label>
                  <input
                    type="text"
                    name="jobPlace"
                    value={job[currentJobIndex].jobPlace}
                    onChange={onJobChangeHandler}
                  />
                </div>

                <div className="form-element-div form-element-div-experience">
                  <label htmlFor="jobStartDate">Job start date</label>
                  <input
                    type="text"
                    name="jobStartDate"
                    value={job[currentJobIndex].jobStartDate}
                    onChange={onJobChangeHandler}
                  />
                </div>

                <div className="form-element-div form-element-div-experience">
                  <label htmlFor="jobEndDate">Job end date</label>
                  <input
                    type="text"
                    name="jobEndDate"
                    value={job[currentJobIndex].jobEndDate}
                    onChange={onJobChangeHandler}
                  />
                </div>
              </div>

              <div className="bullet-points-container">
                <button
                  className="addJobBulletButton"
                  onClick={addJobBulletHandler}
                >
                  Add bullet
                </button>
                {job[currentJobIndex].bulletPoints.map((bulletPoint) => {
                  return (
                    <React.Fragment key={bulletPoint.id}>
                      <div className="job-bullet-div">
                        <input
                          type="text"
                          value={bulletPoint.data}
                          key={bulletPoint.id}
                          onChange={(event) => {
                            let updatedArray = structuredClone(job);

                            updatedArray[currentJobIndex].bulletPoints.forEach(
                              (bullet) => {
                                if (bullet.id === bulletPoint.id) {
                                  bullet.data = event.target.value;
                                }
                              },
                            );

                            setCurrentJob(updatedArray);
                          }}
                        />

                        <FontAwesomeIcon
                          icon={faTrashCan}
                          size="2xl"
                          className="removeJobBullet"
                          onClick={() => {
                            let updatedArray = structuredClone(job);
                            let filteredBulletPoints = updatedArray[
                              currentJobIndex
                            ].bulletPoints.filter((bullet) => {
                              return bullet.id !== bulletPoint.id;
                            });

                            updatedArray[currentJobIndex].bulletPoints =
                              filteredBulletPoints;
                            setCurrentJob(updatedArray);
                          }}
                        />
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </>
          ) : null}

          {currentSection === 3 ? (
            <>
              {projects.length - 1 === currentProjectIndex &&
                projects.length < 3 && (
                  <FontAwesomeIcon
                    icon={faSquarePlus}
                    size="2xl"
                    className="add-project-button project-buttons"
                    onClick={onAddProjectClick}
                  />
                )}

              {currentProjectIndex !== 0 && (
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  size="2xl"
                  className="prev-project-button project-buttons"
                  onClick={onPrevProjectClick}
                />
              )}

              {currentProjectIndex < projects.length - 1 && (
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="2xl"
                  className="next-project-button project-buttons"
                  onClick={onNextProjectClick}
                />
              )}

              {projects.length !== 1 && (
                <FontAwesomeIcon
                  icon={faTrashCan}
                  size="2xl"
                  className="delete-project-button project-buttons"
                  onClick={onDeleteProjectClick}
                />
              )}

              <p className="project-number-heading">
                Project number {currentProjectIndex}
              </p>

              <div className="project-elements-container">
                <div className="form-element-div form-element-div-project">
                  <label htmlFor="projectName">Project Name?</label>
                  <input
                    type="text"
                    name="projectName"
                    value={projects[currentProjectIndex].projectName}
                    onChange={onProjectChangeHandler}
                  />
                </div>

                <div className="form-element-div form-element-div-project">
                  <label htmlFor="techStack">Project tech stack?</label>
                  <textarea
                    name="techStack"
                    value={projects[currentProjectIndex].techStack}
                    onChange={onProjectChangeHandler}
                  />
                </div>
              </div>

              <div className="bullet-points-container-projects">
                <button
                  className="addProjectBulletButton"
                  onClick={addProjectBulletHandler}
                >
                  Add bullet
                </button>
                {projects[currentProjectIndex].bulletPoints.map(
                  (bulletPoint) => {
                    return (
                      <React.Fragment key={bulletPoint.id}>
                        <div className="project-bullet-div">
                          <input
                            type="text"
                            value={bulletPoint.data}
                            key={bulletPoint.id}
                            onChange={(event) => {
                              let updatedArray = structuredClone(projects);

                              updatedArray[
                                currentProjectIndex
                              ].bulletPoints.forEach((bullet) => {
                                if (bullet.id === bulletPoint.id) {
                                  bullet.data = event.target.value;
                                }
                              });

                              setProjects(updatedArray);
                            }}
                          />
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            size="2xl"
                            className="removeProjectBullet"
                            onClick={() => {
                              let updatedArray = structuredClone(projects);
                              let filteredBulletPoints = updatedArray[
                                currentProjectIndex
                              ].bulletPoints.filter((bullet) => {
                                return bullet.id !== bulletPoint.id;
                              });

                              updatedArray[currentProjectIndex].bulletPoints =
                                filteredBulletPoints;

                              setProjects(updatedArray);
                            }}
                          />
                        </div>
                      </React.Fragment>
                    );
                  },
                )}
              </div>
            </>
          ) : null}

          {currentSection === 4 ? (
            <>
              <div className="skills-element-container">
                <div className="form-element-div form-element-div-skills">
                  <label htmlFor="languages">Languages?</label>
                  <textarea
                    name="languages"
                    value={skills.languages}
                    onChange={onSkillsChange}
                  />
                </div>

                <div className="form-element-div form-element-div-skills">
                  <label htmlFor="frameworks">Frameworks?</label>
                  <textarea
                    name="frameworks"
                    value={skills.frameworks}
                    onChange={onSkillsChange}
                  />
                </div>

                <div className="form-element-div  form-element-div-skills">
                  <label htmlFor="developerTools">Developer tools?</label>
                  <textarea
                    name="developerTools"
                    value={skills.developerTools}
                    onChange={onSkillsChange}
                  />
                </div>
                <div className="form-element-div form-element-div-skills">
                  <label htmlFor="">Libraries?</label>
                  <textarea
                    name="libraries"
                    value={skills.libraries}
                    onChange={onSkillsChange}
                  />
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export { InfoSection };
