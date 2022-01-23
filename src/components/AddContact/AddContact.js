import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addStudent } from '../../redux/features/infoSlice';

const AddContact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const dispatch = useDispatch();

    const navigation = useNavigate();

    const students = useSelector(state => state.student.students);

    const checkEmail = students.find(student => student.email === email && email);
    const checkPhone = students.find(student => student.phone === phone);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id : students.length + 1,
            firstName,
            lastName,
            email,
            phone,
            address
        };

        if(!firstName || !lastName || !email || !phone || !address){
            return toast.warning("Please Fillout All Fields")
        }
        if(checkEmail){
            return toast.warning("This Email Is Already Exists")
        }
        if(checkPhone){
            return toast.warning("This Phone Number Is Already Exists")
        }
        dispatch(addStudent(data));
        toast.success("A Contact Added Successfully");
        navigation('/');
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