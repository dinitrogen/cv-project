import React, { Component } from 'react';
import '../styles/subSection.css';

class Experience extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            name: '',
            address: '',
            isSubmitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEditClicked = this.handleEditClicked.bind(this);
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
        
        this.setState({
            
            isSubmitted: true
        });
    }

    handleEditClicked() {
        this.setState({
            isSubmitted: false
        });
    }

    render() {
        return (
            <div>
                
                {!this.state.isSubmitted &&
                <form className="editForm" onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Address:
                        <input
                            name="address"
                            type="text"
                            value={this.state.address}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>}

                {this.state.isSubmitted && 
                    <div className="subSectionDiv">Name: {this.state.name}<br/>
                    Address: {this.state.address}<br/>
                    <button className="editButton" onClick={this.handleEditClicked}>Edit</button>
                    <button className="editButton" onClick={() => this.props.handleDelete(this.props.type, this.props.id)}>Delete</button>
                    </div>}
            </div>
        );
    }

}

export default Experience;