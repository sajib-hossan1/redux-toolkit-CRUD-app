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
            <div className="col-lg-4 col-md-6 col-sm-12 p-4">
                <div className="card shadow mx-auto" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{firstName} {lastName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                        <p className="card-text">{phone}</p>
                        <p className="card-text">{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;