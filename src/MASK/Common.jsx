import React from 'react';
import { NavLink } from 'react-router-dom';
import './Index.css';


const Common = (props) =>{
    return (
        <>
            <section className=' d-flex align-items-center w-100 vh-99 mb-5' id='header'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-10 col-12 mx-auto px-0'>
                        <div className='row content'>
                            <div className='col-md-6 col-12 mx-auto pt-lg-0 order-lg-1 order-2 d-flex justify-content-center flex-column leftSection'>
                                <h1>{props.name} <strong className='companyName'>MASK</strong></h1>
                                <h2 className='my-3'>We are the team of talented developers making websites.</h2>
                                <NavLink to={props.visit} className='btn btnGetStarted'>{props.btnName}</NavLink>
                            </div>
                            <div className='col-md-6 col-12 d-flex justify-content-center order-1 order-lg-2'>
                                <img src={props.imgSrc} className='img-fluid header-img animated' alt='brandImage'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Common;