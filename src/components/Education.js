import React, { useState } from 'react';
import '../styles/subSection.css';

const Education = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === 'name') {
            setName(value);
        } else if (name === 'address') {
            setAddress(value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setIsSubmitted(true);
    }

    const handleEditClicked = () => {
        
        setIsSubmitted(false);
    }

    
    return (
        <div >
            
            {!isSubmitted &&
            <form className="editForm" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        name="name"
                        type="text"
                        value={name}
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                    Address:
                    <input
                        name="address"
                        type="text"
                        value={address}
                        onChange={handleChange} />
                </label>
                <br />
                
                <input type="submit" value="Submit" />
            </form>}

            {isSubmitted && 
                <div className="subSectionDiv">Name: {name}<br/>
                Address: {address}<br/>
                
                <div>
                    <button className="editButton" onClick={handleEditClicked}>Edit</button>
                    <button className="editButton" onClick={() => props.handleDelete(props.type, props.id)}>Delete</button>
                </div>
                </div>}
        </div>
    );
    

}

export default Education;