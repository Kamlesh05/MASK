import React from 'react';
import Cards from './Cards';
import CardsData from './CardsData';

const Service = () =>{
    return (
        <>
          <div className='my-5 mx-auto'>
                <h1 className='text-center'>Our Services</h1>
         </div>
                <div className='container-fluid mb-5 p-3 bg-light'>
                    <div className='row'>
                        <div className='col-md-9 col-12 mx-auto'>
                            <div className='row'>
                                {
                                      CardsData.map((val,ind)=>{
                                        //   console.log(val.src);
                                            return <Cards
                                                imgSrc={val.src}
                                                title={val.name}
                                                key={ind}
                                            /> 
                                      })
                                }
                              
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Service;