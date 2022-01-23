import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { editStudent } from '../redux/features/infoSlice';

const EditInfo = () => {
    const {id} = useParams();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const navigation = useNavigate();

    const dispatch = useDispatch();
    const students = useSelector(state => state.student.students);
    const currentStudent = students.find(student => student.id === parseInt(id));
    

    useEffect(() => {
        if(currentStudent){
            setFirstName(currentStudent.firstName);
            setLastName(currentStudent.lastName);
            setEmail(currentStudent.email);
            setPhone(currentStudent.phone);
            setAddress(currentStudent.address);
        }
    }, [currentStudent])

    const handleEdit = e => {
        e.preventDefault();

        const updatedData = {
            id : parseInt(id),
            firstName,
            lastName,
            email,
            phone,
            address
        }

        dispatch(editStudent(updatedData));
        navigation('/')
        toast.success("Contact Updated Successfully")
        
    };

    return (
        <div className='container'>
            <h2 className='text-center my-3'>Contact Edit with ID no. {id}</h2>
            <form onSubmit={handleEdit} className='mt-4'>
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