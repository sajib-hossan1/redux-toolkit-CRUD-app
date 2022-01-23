import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getStudent, clearStudent } from '../../redux/features/infoSlice';

const Info = () => {
    const id = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudent(id));
        return () => {
            dispatch(clearStudent())
        }
    }, []);

    const student = useSelector(state => state.student.student);
    
    const {firstName, lastName, email,phone,address} = student;

    return (
        <div>
            <div className="col-md-10 mx-auto p-4">
                <div className="card shadow mx-auto">
                    <div className="card-body p-5">
                        <h2 className="card-title">{firstName} {lastName}</h2>
                        <h3 className="card-subtitle mb-2 text-muted">{email}</h3>
                        <h4 className="card-text">{phone}</h4>
                        <h5 className="card-text">{address}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;