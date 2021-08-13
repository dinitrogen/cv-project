import React, { Component } from 'react';
import General from './General.js';
import Education from './Education.js';
import Experience from './Experience.js';
import '../styles/CVform.css';

class CVform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolForms: [],
            experienceForms: [],
            schoolForm: {
                id: 1
            },
            experienceForm: {
                id: 1
            },
            inPreviewMode: false
        }
    this.addSchoolForm = this.addSchoolForm.bind(this);
    this.addExperienceForm = this.addExperienceForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.showPreviewMode = this.showPreviewMode.bind(this);
    this.hidePreviewMode = this.hidePreviewMode.bind(this);
    this.generatePDF = this.generatePDF.bind(this);
    }

    addSchoolForm(event) {
        const schoolForms = this.state.schoolForms;
        let prevID = this.state.schoolForm.id;
        prevID++;
        this.setState({
            schoolForms: schoolForms.concat(<Education 
                                            type="education"
                                            key={this.state.schoolForm.id} // key is required and may be a "reserved" keyword for React
                                            id={this.state.schoolForm.id}
                                            handleDelete={this.handleDelete}
                                             />),
            schoolForm: {
                id: prevID
            }
        });
    }

    addExperienceForm(event) {
        const experienceForms = this.state.experienceForms;
        let prevID = this.state.experienceForm.id;
        prevID++;
        this.setState({
            experienceForms: experienceForms.concat(<Experience 
                                            type="experience"
                                            key={this.state.experienceForm.id} // key is required and may be a "reserved" keyword for React
                                            id={this.state.experienceForm.id}
                                            handleDelete={this.handleDelete}
                                             />),
            experienceForm: {
                id: prevID
            }
        });
    }

    handleDelete(type, id) {
        // alert('Deleted' + id + type);
        if (type === 'education') {
            // console.log(this.state.schoolForms);
            let newSchoolForms = this.state.schoolForms.filter((schoolForm) => {
                // console.log(id, schoolForm.key);
                return schoolForm.props.id !== id;
            });

            this.setState({
                schoolForms: newSchoolForms
            });
        } else {
            // console.log(this.state.experienceForms);
            let newExperienceForms = this.state.experienceForms.filter((experienceForm) => {
                return experienceForm.props.id !== id;
            });

            this.setState({
                experienceForms: newExperienceForms
            });
        }
    }

    showPreviewMode() {
        this.setState({
            inPreviewMode: true
        });
        document.querySelectorAll('.editButton').forEach(function(button) {
            button.style.display = 'none';
        });
        document.querySelectorAll('.editForm').forEach(function(button) {
            button.style.display = 'none';
        });

    }

    hidePreviewMode() {
        this.setState({
            inPreviewMode: false
        });
        document.querySelectorAll('.editButton').forEach(function(button) {
            button.style.display = 'inline';
            button.style.marginLeft = 'auto';
            button.style.marginRight = 'auto';
        });
        document.querySelectorAll('.editForm').forEach(function(button) {
            button.style.display = 'block';
            
        });
    }

    generatePDF() {
        // TODO
        return;
    }


    render() {
        return (
            <div className="CVcontainer">
                
                    <div>
                        <h2>Personal Info:</h2>
                        <div className="CVFormDiv">
                            <General inPreviewMode={this.state.inPreviewMode}/>
                        </div>
                        <br />
                        <h2>Education:</h2>
                        <button className="editButton" onClick={this.addSchoolForm}>Add School</button>
                        
                        <div className="CVFormDiv">
                            {this.state.schoolForms.map((schoolForm) => {
                                    return schoolForm;
                                })}
                        </div>
                        <br />
                        <h2>Experience:</h2>
                        <button className="editButton" onClick={this.addExperienceForm}>Add Experience</button>
                        
                        <div className="CVFormDiv">
                            {this.state.experienceForms.map((experienceForm) => {
                                return experienceForm;
                            })}
                        </div>
                        <br />
                        {!this.state.inPreviewMode &&
                        <button onClick={this.showPreviewMode}>Show preview</button>}
                    </div>

                {this.state.inPreviewMode &&
                    <div>
                        <button onClick={this.hidePreviewMode}>Show edit mode</button>
                        <br />
                        {/* <button onClick={this.generatePDF}>Generate pdf!</button> */}
                    </div>
                }

            </div>
        );
    }

}

export default CVform;