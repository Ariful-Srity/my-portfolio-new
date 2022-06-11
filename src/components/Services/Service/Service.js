import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, img, Details } = service;

    return (
        <div className="service  " >
            <Card style={{ width: '18rem' }} className="col-sm-12">
                <Card.Img variant="top" src={img} className="img-fluid" />
                <Card.Body>





                    <Link to="/details">
                        <button className='btn btn-primary'>Projects Details</button>
                    </Link>


                </Card.Body>
            </Card>







        </div >
    );
};

export default Service;