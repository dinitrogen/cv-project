import React, { Component } from 'react';

class General extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phone: '',
            isSubmitted: false
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
                Personal info:<br/>
                {!this.state.isSubmitted &&
                <form onSubmit={this.handleSubmit}>
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
                    <label>
                        Phone:
                        <input
                            name="phone"
                            type="text"
                            value={this.state.phone}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>}

                {this.state.isSubmitted && 
                    <div>Name: {this.state.name}<br/>
                    Address: {this.state.address}<br/>
                    Phone: {this.state.phone}<br/>
                    <button onClick={this.handleEditClicked}>Edit</button>
                    </div>}
            </div>
        );
    }

}

export default General;