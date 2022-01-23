import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import InfoItem from '../InfoItem/InfoItem';

const Home = () => {

    const students = useSelector(state => state.student.students);
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        students.map(i => <InfoItem
                            key={i.id}
                            info={i}
                        >

                        </InfoItem>)
                    }
                </div>
                <Link to='/add' className='btn btn-dark btn-sm d-md-block' style={{position: 'fixed', bottom:0, right:0, margin : '20px'}}>Add New Contact</Link>
            </div>
        </div>
    );
};

export default Home;