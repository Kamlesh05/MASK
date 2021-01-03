import React from 'react';
 import web from "../../src/MASK/Images/About.jpg";
import Common from './Common';



const About = () =>{
    return (
        <>
            <Common name='Welcome to About page.' imgSrc={web} visit='/contact' btnName='Contact now'/>
        </>
        
    )
}

export default About;