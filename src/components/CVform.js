import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Header from './Header.js';
import General from './General.js';
import Education from './Education.js';
import Experience from './Experience.js';
import '../styles/CVform.css';


const CVform = () => {

    const [schoolFormIds, setSchoolFormIds] = useState([])
    const [schoolFormId, setSchoolFormId] = useState(1);
    const [experienceFormIds, setExperienceFormIds] = useState([]);
    const [experienceFormId, setExperienceFormId] = useState(1);
    const [inPreviewMode, setInPreviewMode] = useState(false);

    const componentRef = useRef();
    

    const addSchoolForm = () => {
    
        let newSchoolFormId = schoolFormId + 1;

        setSchoolFormId(newSchoolFormId);
        setSchoolFormIds([...schoolFormIds, newSchoolFormId])

    }

    const addExperienceForm = () => {
        
            let newExperienceFormId = experienceFormId + 1;
            
            setExperienceFormId(newExperienceFormId);
            setExperienceFormIds([...experienceFormIds, newExperienceFormId]);
    }

    const handleDelete = (type, id) => {
       
        if (type === 'education') {    
            setSchoolFormIds(schoolFormIds.filter((schoolFormId) => {
                return schoolFormId !== id;
            }));

        } else {
            setExperienceFormIds(experienceFormIds.filter((experienceFormId) => {
                return experienceFormId !== id;
            }));
        }
    }

    const showPreviewMode = () => {
        
        setInPreviewMode(true);
        
        document.querySelectorAll('.editButton').forEach(function(button) {
            button.style.display = 'none';
        });
        document.querySelectorAll('.editForm').forEach(function(form) {
            form.style.display = 'none';
        });
    }

    const hidePreviewMode = () => {
        
        setInPreviewMode(false);
        
        document.querySelectorAll('.editButton').forEach(function(button) {
            button.style.display = 'inline';
            button.style.marginLeft = 'auto';
            button.style.marginRight = 'auto';
        });
        document.querySelectorAll('.editForm').forEach(function(form) {
            form.style.display = 'block';
        });
    }

    const schoolFormDisplay = schoolFormIds.map((schoolFormId) =>
        <Education
        type="education"
        key={schoolFormId} // key is required and may be a "reserved" keyword for React
        id={schoolFormId}
        handleDelete={handleDelete}
        />
    );

    const experienceFormDisplay = experienceFormIds.map((experienceFormId) =>
        <Experience 
            type="experience"
            key={experienceFormId} // key is required and may be a "reserved" keyword for React
            id={experienceFormId}
            handleDelete={handleDelete}
            />
    );

    return (
        <div className="CVForm">
            
            <div className="CVcontainer" ref={componentRef}>
                
                <Header />
                
                <h2>Education:</h2>
                <button className="editButton" onClick={addSchoolForm}>Add School</button>


                <div className="CVFormDiv">
                    {schoolFormDisplay}
                </div>
                <br />
                <h2>Experience:</h2>
                <button className="editButton" onClick={addExperienceForm}>Add Experience</button>
                
                <div className="CVFormDiv">
                    {experienceFormDisplay}
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