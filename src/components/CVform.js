import React, { useState, useRef } from 'react';
import General from './General.js';
import Education from './Education.js';
import Experience from './Experience.js';
import '../styles/CVform.css';
import ReactToPrint from 'react-to-print';

const CVform = () => {
    const [schoolForms, setSchoolForms] = useState([]);
    const [experienceForms, setExperienceForms] = useState([]);
    const [schoolFormId, setSchoolFormId] = useState(1);
    const [experienceFormId, setExperienceFormId] = useState(1);
    const [inPreviewMode, setInPreviewMode] = useState(false);

    const componentRef = useRef();
    

    const addSchoolForm = () => {
        // const schoolForms = schoolForms;
        // let prevID = schoolFormId;
        // prevID++;
        
        setSchoolForms(schoolForms.concat(<Education 
                                            type="education"
                                            key={schoolFormId} // key is required and may be a "reserved" keyword for React
                                            id={schoolFormId}
                                            handleDelete={handleDelete}
                                             />));

        setSchoolFormId(schoolFormId + 1);
        console.log(schoolForms);

    }

    const addExperienceForm = () => {
        // const experienceForms = this.state.experienceForms;
        // let prevID = this.state.experienceForm.id;
        // prevID++;
        
       
            setExperienceForms(experienceForms.concat(<Experience 
                                            type="experience"
                                            key={experienceFormId} // key is required and may be a "reserved" keyword for React
                                            id={experienceFormId}
                                            handleDelete={handleDelete}
                                             />));
            setExperienceFormId(experienceFormId + 1);
            console.log(experienceForms);

    }

    const handleDelete = (type, id) => {
        alert('Deleted' + id + type);
        if (type === 'education') {
            // console.log(this.state.schoolForms);
            let newSchoolForms = schoolForms.filter((schoolForm) => {
                console.log(id, schoolForm.props.id);
                return schoolForm.props.id !== id;
            });

            setSchoolForms(newSchoolForms);

        } else {
            // console.log(this.state.experienceForms);
            let newExperienceForms = experienceForms.filter((experienceForm) => {
                return experienceForm.props.id !== id;
            });

            setExperienceForms(newExperienceForms);
        }
    }

    const showPreviewMode = () => {
        
        setInPreviewMode(true);
        
        document.querySelectorAll('.editButton').forEach(function(button) {
            button.style.display = 'none';
        });
        document.querySelectorAll('.editForm').forEach(function(button) {
            button.style.display = 'none';
        });
    }

    const hidePreviewMode = () => {
        
        setInPreviewMode(false);
        
        document.querySelectorAll('.editButton').forEach(function(button) {
            button.style.display = 'inline';
            button.style.marginLeft = 'auto';
            button.style.marginRight = 'auto';
        });
        document.querySelectorAll('.editForm').forEach(function(button) {
            button.style.display = 'block';
        });
    }


    return (
        <div className="CVForm">
            
            <div className="CVcontainer" ref={componentRef}>
                <h2>Personal Info:</h2>
                <div className="CVFormDiv">
                    <General inPreviewMode={inPreviewMode}/>
                </div>
                <br />
                <h2>Education:</h2>
                <button className="editButton" onClick={addSchoolForm}>Add School</button>
                
                <div className="CVFormDiv">
                    {schoolForms.map((schoolForm) => {
                            return schoolForm;
                        })}
                </div>
                <br />
                <h2>Experience:</h2>
                <button className="editButton" onClick={addExperienceForm}>Add Experience</button>
                
                <div className="CVFormDiv">
                    {experienceForms.map((experienceForm) => {
                        return experienceForm;
                    })}
                </div>
                <br />
                {!inPreviewMode &&
                <button onClick={showPreviewMode}>Show preview</button>}
            </div>
                

            {inPreviewMode &&
                <div>
                    <button onClick={hidePreviewMode}>Show edit mode</button>
                    <br />
                    
                    <ReactToPrint
                        trigger={() => <button className="printButton">Print</button>}
                        content={() => componentRef.current}
                    />
                    
                </div>
            }

        </div>
    );
    

}

export default CVform;