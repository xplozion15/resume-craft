import { use, useState } from "react";
import React from 'react';

function InfoSection() {

    const sections = ["intro", "education", "experience", "projects", "skills"];
    const [currentSection, setCurrentSection] = useState(0);
    const [personalInfo, setPersonalInfo] = useState({
        fullName: "Orange Cat",
        phoneNumber: "00070707070",
        linkedIn: "orangecatto15",
        github: "orangecatcodes",
    })
    const [currentDegreeIndex, setCurrentDegreeIndex] = useState(0);
    const [education, setCurrentEducation] = useState([
        {
            degreeNumber: 0,
            degreeName: "xyz",
            degreeLocation: "xyz",
            degreeCollege: "xyz",
            degreeStartDate: "xyz",
            degreeEndDate: "xyz"
        },
        {
            degreeNumber: 1,
            degreeName: "new",
            degreeLocation: "newwwwwwz",
            degreeCollege: "xyz",
            degreeStartDate: "xyz",
            degreeEndDate: "xyz"
        },


    ])

    const [currentJobIndex, setCurrentJobIndex] = useState(0);
    const [job, setCurrentJob] = useState([
        {
            jobNumber: 0,
            jobRole: "Frontend Developer",
            jobCompany: "TechNova Solutions",
            jobPlace: "Remote",
            jobStartDate: "June 2021",
            jobEndDate: "April 2023",
            bulletPoints: [
                "Developed and maintained responsive UI components using React.js.",
                "Collaborated with backend developers to integrate REST APIs.",
                "Improved page load times by 30% through performance optimization techniques."
            ],
        },
        {
            jobNumber: 1,
            jobRole: "Software Engineer Intern",
            jobCompany: "ZypherSoft Pvt Ltd",
            jobPlace: "Hybrid",
            jobStartDate: "January 2024",
            jobEndDate: "July 2024",
            bulletPoints: [
                "Built internal tools using Node.js and Express to automate reporting tasks.",
                "Contributed to code reviews and participated in daily Agile stand-ups.",
                "Wrote unit tests with Jest to ensure reliability and reduce bugs in production."
            ],
        },
        {
            jobNumber: 2,
            jobRole: "Junior Full Stack Developer",
            jobCompany: "BrightPixel Technologies",
            jobPlace: "On-site",
            jobStartDate: "August 2024",
            jobEndDate: "Present",
            bulletPoints: [
                "Implemented new features across the stack using React, Node.js, and PostgreSQL.",
                "Worked closely with product designers to improve user workflows.",
                "Maintained deployment pipelines and resolved production issues promptly."
            ],
        },
    ]);




    function onNextJobButton() {
        setCurrentJobIndex(currentJobIndex + 1)
    }


    function onBackJobButton() {
        setCurrentJobIndex(currentJobIndex - 1)
    }


    function onJobPlusClick() {
        setCurrentJob((prev) => {
            const newDegreeIndex = prev.length;

            return [
                ...prev,
                {
                    jobNumber: newDegreeIndex,
                    jobRole: "",
                    jobCompany: "",
                    jobPlace: "",
                    jobStartDate: "",
                    jobEndDate: "",
                    bulletPoints: [""],
                },
            ];
        });
        setCurrentJobIndex(currentJobIndex + 1);
    }


    function deleteJobHandler() {
        let updatedJob = [...job];
        updatedJob = updatedJob.filter((job) => {
            return job.jobNumber !== currentJobIndex;

        })

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

    function onJobChangeHandler(event) {
        let updatedJob = [...job];
        let updatedObject = { ...updatedJob[currentJobIndex] };
        updatedObject[event.target.name] = event.target.value;
        updatedJob[currentJobIndex] = updatedObject;
        setCurrentJob(updatedJob);
    }

    // function addJobBulletHandlerr() {
    //     setCurrentJob((prev) => {
    //         const newDegreeIndex = prev.length;
    //         const updatedArray = [...prev];
    //         const bulletPointsArray = updatedArray[currentJobIndex].bulletPoints;
    //         const updatedBulletPointsArray = [...bulletPointsArray, ""];
    //         updatedArray[currentJobIndex].bulletPoints = updatedBulletPointsArray;
    //         console.log(job)
    //         return (updatedArray)

    //     });
    // }

    function addJobBulletHandler() {
        const updatedArray = structuredClone(job);
        const bulletPointsArray = updatedArray[currentJobIndex].bulletPoints;
        const updatedBulletPointsArray = [...bulletPointsArray, ""];
        updatedArray[currentJobIndex].bulletPoints = updatedBulletPointsArray;
        setCurrentJob(updatedArray);
        console.log(job);
    }

    function onPersonalInfoChangeHandler(event) {
        setPersonalInfo({
            ...personalInfo,
            [event.target.name]: event.target.value,
        })
    }




    function onEducationChangeHandler(event) {
        let updatedEducation = [...education];
        let updatedObject = { ...updatedEducation[currentDegreeIndex] };
        updatedObject[event.target.name] = event.target.value;
        updatedEducation[currentDegreeIndex] = updatedObject;
        setCurrentEducation(updatedEducation);
    }

    function onNextDegreeButton() {
        setCurrentDegreeIndex(currentDegreeIndex + 1)
    }

    function onBackDegreeButton() {
        setCurrentDegreeIndex(currentDegreeIndex - 1)
    }

    function onEducationPlusClick() {
        setCurrentEducation((prev) => {
            const newDegreeIndex = prev.length;
            return [
                ...prev,
                {
                    degreeNumber: newDegreeIndex,
                    degreeName: "",
                    degreeLocation: "",
                    degreeCollege: "",
                    degreeStartDate: "",
                    degreeEndDate: "",
                }
            ];
        });
        setCurrentDegreeIndex(currentDegreeIndex + 1);
    }

    function deleteDegreeHandler() {
        let updatedEducation = [...education];
        updatedEducation = updatedEducation.filter((degree) => {
            return degree.degreeNumber !== currentDegreeIndex;

        })

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
                        {currentSection !== 0 && <button className="previous-button" onClick={() => { setCurrentSection(currentSection - 1) }}>Previous</button>}

                        {currentSection < sections.length - 1 && <button className="next-button" onClick={() => { setCurrentSection(currentSection + 1) }}>Next</button>}
                    </div>
                </div>
                <div className="intro-form">
                    {(currentSection === 0) ?
                        <>
                            <div className="form-element-div">
                                <label htmlFor="full-name">Full name?</label>
                                <input type="text" name="fullName" value={personalInfo.fullName} onChange={onPersonalInfoChangeHandler} />
                            </div>

                            <div className="form-element-div">
                                <label htmlFor="phone-number">Phone number?</label>
                                <input type="number" name="phoneNumber" value={personalInfo.phoneNumber} onChange={onPersonalInfoChangeHandler} />
                            </div>

                            <div className="form-element-div">
                                <label htmlFor="linkedin">LinkedIn</label>
                                <input type="text" name="linkedIn" value={personalInfo.linkedIn} onChange={onPersonalInfoChangeHandler} />
                            </div>

                            <div className="form-element-div">
                                <label htmlFor="github">GitHub</label>
                                <input type="text" name="github" value={personalInfo.github} onChange={onPersonalInfoChangeHandler} />
                            </div>

                            <button className="intro-save-button">SAVE</button>
                        </>

                        : null}

                    {(currentSection === 1) ?
                        <>
                            <div className="education-navigation-div">
                                {currentDegreeIndex === education.length - 1 && currentDegreeIndex < 2 && <button className="add-degree degree-navigation-buttons" onClick={onEducationPlusClick}>+</button>}
                                {currentDegreeIndex !== 0 && <button className="prev-degree degree-navigation-buttons" onClick={onBackDegreeButton}>back</button>}
                                {currentDegreeIndex !== education.length - 1 && <button className="next-degree degree-navigation-buttons" onClick={onNextDegreeButton}>next</button>}
                                {education.length > 1 && <button className="delete-degree degree-navigation-buttons" onClick={deleteDegreeHandler} >delete</button>}
                            </div>

                            <p>Degree number {education[currentDegreeIndex].degreeNumber}</p>

                            <div className="form-element-div">
                                <label htmlFor="degreeCollege">College name</label>
                                <input type="text" name="degreeCollege" value={education[currentDegreeIndex].degreeCollege} onChange={onEducationChangeHandler} />
                            </div>

                            <div className="form-element-div">
                                <label htmlFor="degreeName">Degree name?</label>
                                <input type="text" name="degreeName" value={education[currentDegreeIndex].degreeName} onChange={onEducationChangeHandler} />
                            </div>

                            <div className="form-element-div">
                                <label htmlFor="degreeLocation">Location</label>
                                <input type="text" name="degreeLocation" value={education[currentDegreeIndex].degreeLocation} onChange={onEducationChangeHandler} />
                            </div>

                            <div className="form-element-div">
                                <label htmlFor="degreeStartDate">degree start date?</label>
                                <input type="text" name="degreeStartDate" value={education[currentDegreeIndex].degreeStartDate} onChange={onEducationChangeHandler} />
                            </div>

                            <div className="form-element-div">
                                <label htmlFor="degreeEndDate">Degree end date?</label>
                                <input type="text" name="degreeEndDate" value={education[currentDegreeIndex].degreeEndDate} onChange={onEducationChangeHandler} />
                            </div>

                            <button className="eduation-save-button">SAVE</button>
                        </>
                        : null}



                    {(currentSection === 2) ?
                        <>
                            <div className="job-navigation-div">
                                {currentJobIndex === job.length - 1 && currentJobIndex < 3 && <button className="add-job job-navigation-buttons" onClick={onJobPlusClick}>+</button>}
                                {currentJobIndex !== 0 && <button className="prev-job job-navigation-buttons" onClick={onBackJobButton}>back</button>}
                                {currentJobIndex !== job.length - 1 && <button className="next-job job-navigation-buttons" onClick={onNextJobButton}>next</button>}
                                {job.length > 1 && <button className="delete-job job-navigation-buttons" onClick={deleteJobHandler} >delete</button>}
                            </div>

                            <p>Job number {job[currentJobIndex].jobNumber}</p>

                            <div className="form-element-div">
                                <label htmlFor="jobRole">Job Role</label>
                                <input type="text" name="jobRole" value={job[currentJobIndex].jobRole} onChange={onJobChangeHandler} />
                            </div>

                            <div className="form-element-div">
                                <label htmlFor="jobCompany">Job Company</label>
                                <input type="text" name="jobCompany" value={job[currentJobIndex].jobCompany} onChange={onJobChangeHandler} />
                            </div>

                            <div className="form-element-div">
                                <label htmlFor="jobPlace">Job place</label>
                                <input type="text" name="jobPlace" value={job[currentJobIndex].jobPlace} onChange={onJobChangeHandler} />
                            </div>


                            <div className="form-element-div">
                                <label htmlFor="jobStartDate">Job start date</label>
                                <input type="text" name="jobStartDate" value={job[currentJobIndex].jobStartDate} onChange={onJobChangeHandler} />
                            </div>


                            <div className="form-element-div">
                                <label htmlFor="jobEndDate">Job end date</label>
                                <input type="text" name="jobEndDate" value={job[currentJobIndex].jobEndDate} onChange={onJobChangeHandler} />
                            </div>

                            <div className="bullet-points-container">
                                <button className="addJobBulletButton" onClick={addJobBulletHandler}>Add bullet</button>
                                {
                                    job[currentJobIndex].bulletPoints.map((bulletPoint) => {
                                        return (<React.Fragment key={self.crypto.randomUUID()}>
                                            <div className="job-bullet-div">
                                                <input type="text" value={bulletPoint} />
                                                <button className="removeJobBullet">Remove</button>
                                            </div>
                                        </React.Fragment>)


                                    })
                                }
                            </div>

                            <button className="experienceSaveButton">SAVE</button>

                        </>
                        : null}
                </div>

            </div>


        </>
    )
}


export { InfoSection };







