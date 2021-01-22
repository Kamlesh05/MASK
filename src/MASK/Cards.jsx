import React from 'react';
// import Cards from './Cards';

const Cards = (props)=>{
    return(
        <>
            <div className='col-lg-4 col-md-6 col-8 mx-auto gy-5'>
                <div className="card">
                    <img src={props.imgSrc} className="card-img-top cardsImg" alt="serv"/>
                    <div className="card-body">
                            <h1 className="card-title"><strong>{props.title}</strong></h1>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;

                             