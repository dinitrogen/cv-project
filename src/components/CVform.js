import React, { Component } from 'react';
import General from './General.js';
import Education2 from './Education.js';
import Experience from './Experience.js';

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
            }
        }
    this.addSchoolForm = this.addSchoolForm.bind(this);
    this.addExperienceForm = this.addExperienceForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    }

    addSchoolForm(event) {
        const schoolForms = this.state.schoolForms;
        let prevID = this.state.schoolForm.id;
        prevID++;
        this.setState({
            schoolForms: schoolForms.concat(<Education2 
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


    render() {
        return (
            <div>
                
                <General />
                <br />
                <button onClick={this.addSchoolForm}>Add School</button>
                
                <div className="schoolsDiv">
                    {this.state.schoolForms.map((schoolForm) => {
                            return schoolForm;
                        })}
                </div>
                <br />
                <button onClick={this.addExperienceForm}>Add Experience</button>
                
                <div className="experienceDiv">
                    {this.state.experienceForms.map((experienceForm) => {
                        return experienceForm;
                    })}
                </div>
                        
            </div>
        );
    }

}

export default CVform;