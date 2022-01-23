import React, { useState } from 'react';

const AddContact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <div className='container'>
            <h2 className='text-center my-3'>Give Necessary Info To Add New Contact</h2>
            <form onSubmit={handleSubmit} className='mt-4'>
                <div className="mb-3">
                    <input type="text" onChange={e => setFirstName(e.target.value)} placeholder='First Name' className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="text" onChange={e => setLastName(e.target.value)} placeholder='Last Name' className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="email" onChange={e => setEmail(e.target.value)} placeholder='Your Email' className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="number" onChange={e => setPhone(e.target.value)} placeholder='Your Phone Number' className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="text" onChange={e => setAddress(e.target.value)} placeholder='Address' className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddContact;