import React from 'react';
import { Link } from 'react-router-dom';

const InfoItem = ({info}) => {
    const {id, firstName, lastName, email, phone, address} = info;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 p-4">
            <div className="card shadow mx-auto" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{firstName} {lastName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                    <p className="card-text">{phone}</p>
                    <p className="card-text">{address}</p>
                    <Link to={`/info/${id}`} className='btn btn-sm btn-primary me-2'>Details</Link>
                    <Link to={`/edit/${id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                    <button className='btn btn-sm btn-danger'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default InfoItem;