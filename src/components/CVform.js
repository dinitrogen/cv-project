import React, { Component } from 'react';
import General from './General.js';
import Education2 from './Education2.js';

class CVform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolForms: [],
            schoolsList: []
        }
    this.addSchoolForm = this.addSchoolForm.bind(this);
    }

    // TODO: assign key to each form
    addSchoolForm(event) {
        const schoolForms = this.state.schoolForms;
        this.setState({
            schoolForms: schoolForms.concat(<Education2 />)
        })
    }




    render() {
        return (
            <div>
                
                <General />

                <button onClick={this.addSchoolForm}>Add School</button>
                <div class="schoolsDiv"></div>
                
                {this.state.schoolForms.map((schoolForm) => {
                        return schoolForm;
                    })}
                        
                
            </div>
        );
    }

}

export default CVform;