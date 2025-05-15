import { use, useState } from "react";

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

    function onPersonalInfoChangeHandler(event) {
        setPersonalInfo({
            ...personalInfo,
            [event.target.name]: event.target.value,
        })
    }

    function onEducationChangeHandler(event) {
        setCurrentEducation([{
            ...education,
            [event.target.name]: event.target.value,
        }])
    }

    function onNextDegreeButton() {
        setCurrentDegreeIndex(currentDegreeIndex + 1)
    }

    function onBackDegreeButton() {
        setCurrentDegreeIndex(currentDegreeIndex - 1)
    }

    function onEducationPlusClick() {
        setCurrentEducation((prev) => {
           return [
                ...prev,
                {
                    degreeNumber: currentDegreeIndex+1,
                    degreeName: "",
                    degreeLocation: "",
                    degreeCollege: "",
                    degreeStartDate: "",
                    degreeEndDate: "",
                }
            ];});
        setCurrentDegreeIndex(currentDegreeIndex + 1);
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
                                {education.length > 1 && <button className="delete-degree degree-navigation-buttons">delete</button>}
                            </div>

                            <p>Degree number {education[currentDegreeIndex].degreeNumber}</p>

                            <div className="form-element-div">
                                <label htmlFor="degreeCollege">College name</label>
                                <input type="text" name="degreeCollege" value={education[currentDegreeIndex].degreeCollege} />
                            </div>

                            <div className="form-element-div">
                                <label htmlFor="degreeName">Degree name?</label>
                                <input type="text" name="degreeCollege" value={education[currentDegreeIndex].degreeName} onChange={onEducationChangeHandler} />
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
                </div>

            </div>
        </>
    )
}


export { InfoSection };