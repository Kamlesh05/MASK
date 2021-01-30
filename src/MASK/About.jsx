import React from 'react';


const About = () =>{
    return (
        <>
            <section className=" col-md-10 mx-auto col-12 py-4">
                <div className="container-fluid my-3">
                    <h1 className="text-center aboutHeading">About Us</h1>
                </div>
                <div className="container about">
                    <div className="row">   
                        <div className="aboutMain">
                            {/* <h1 className="">The leader in website creation</h1> */}
                            <div className="aboutContent">
                                <div className="aboutMessage">
                            <p>MASK is the brainchild of our 4 founders - Mahesh Shivale, Santhosh Rajmane, Amol Nandkar and Kamlesh Pawar.  The idea was born (on the beach) while they were constructing a website to be the basis of another start-up idea. They quickly discovered that creating their own website was difficult, frustrating and very costly.</p>
                            <p>It was this agonizing experience that led them to a light bulb moment - build a platform that empowered anyone to create their own website with no coding or design skills needed.
                                In 2015, MASK was born. Since then, we've evolved into the leader in website creation, committed to providing the latest features and capabilities that enable anyone to create a professional online presence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* <Common name='Welcome to About section.' imgSrc={web} visit='/contact' btnName='Contact Now'/> */}
        </>
        
    )
}

export default About;