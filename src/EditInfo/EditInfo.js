import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditInfo = () => {
    const {id} = useParams();

    const [firstName, setFirstName] = useState("Mahes");
    const [lastName, setLastName] = useState("Bhai");
    const [email, setEmail] = useState("mahes@gmail.com");
    const [phone, setPhone] = useState("64924826");
    const [address, setAddress] = useState("Cetan gar, Andrhapradesh");

    return (
        <div className='container'>
            <h2 className='text-center my-3'>Contact Edit with ID no. {id}</h2>
            <form className='mt-4'>
                <div className="mb-3">
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder='First Name' className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Last Name' className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Your Email' className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="number" value={phone} onChange={e => setPhone(e.target.value)} placeholder='Your Phone Number' className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder='Address' className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default EditInfo;