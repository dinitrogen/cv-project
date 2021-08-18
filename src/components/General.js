import React, { useState } from 'react';
import '../styles/subSection.css';

const General = () => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === 'name') {
            setName(value);
        } else if (name === 'address') {
            setAddress(value);
        } else if (name === 'phone') {
            setPhone(value);
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
        <div>
            
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
                <label>
                    Phone:
                    <input
                        name="phone"
                        type="text"
                        value={phone}
                        onChange={handleChange} />
                </label>
                <br />
                
                <input type="submit" value="Submit" />
            
            </form>}

            {isSubmitted &&
                <div className="subSectionDiv">{name}<br/>
                {address}<br/>
                {phone}<br/>
                
                <button className="editButton" onClick={handleEditClicked}>Edit</button>
                </div>}
        </div>
    );
}

export default General;