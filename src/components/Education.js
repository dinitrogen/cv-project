import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schools: [],
            schoolID: 1,
            schoolName: '',
            schoolAddress: '',
            formHidden: true,
            editingOn: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showForm = this.showForm.bind(this);
        // this.deleteEntry = this.deleteEntry.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
                [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let school = {
            id: this.state.schoolID,
            name: this.state.schoolName,
            address: this.state.schoolAddress,
        }
        let prevID = this.state.schoolID;
        prevID++;
        this.setState({
            schools: this.state.schools.concat(school),
            schoolID: prevID,
            schoolName: '',
            schoolAddress: '',
            formHidden: true,
            editingOn: false
        });
        console.log(this.state.schools);
    }

    showForm() {
        this.setState({
            formHidden: false
        });
    }

    deleteEntry(id) {
        let newSchools = this.state.schools.filter(school => school.id !== id);
        this.setState({
            schools: newSchools
        });
    }

    editEntry(id) {
        this.setState({
            editingOn: true
        });
    }

    updateEntry() {
        this.setState({
            editingOn: false
        });
    }


    render() {
        return (
            <div>
                Education:<br/>
                {this.state.formHidden &&
                <button onClick={this.showForm}>Add school</button>}

                {!this.state.formHidden &&
                <form onSubmit={this.handleSubmit}>
                    <label>
                        School name:
                        <input
                            name="schoolName"
                            type="text"
                            value={this.state.schoolName}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        School address:
                        <input
                            name="schoolAddress"
                            type="text"
                            value={this.state.schoolAddress}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>}

                <div>
                    {this.state.schools.map((school) => {
                        return (
                            <div key={school.id}>
                                <div>
                                    <p>{school.name}<br/>
                                    {school.address}</p>
                                    <button onClick={this.deleteEntry.bind(this, school.id)}>Delete</button>
                                </div>
                                {this.state.editingOn &&
                                <div>
                                    <p>Editing form here</p>
                                    <button onClick={this.updateEntry.bind(this)}>Update</button>
                                </div>}
                                {!this.state.editingOn &&
                                <button onClick={this.editEntry.bind(this,school.id)}>Edit entry</button>}
                            </div>
                        )
                    })}
                </div>

            </div>
        );
    }

}

export default Education;