import React from 'react';
import web from "../../src/MASK/Images/Rocket.jpg";
import Common from './Common';


const Home = () =>{

    return (
        <>
        <div className="heroImage img-fluid">
            <Common name='Grow Your Business With' imgSrc={web} visit='/service' btnName='Get Started'/>
        </div>
        </>
    )
}

export default Home;