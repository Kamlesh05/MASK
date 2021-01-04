import React, { useState } from 'react';

const Contact = () =>{

    let [data, setData] =useState(
        {
            // fullname44:'',
            // mobile44:'',
            // email44:'',
            // message44:''
         }
        );

        const InputEvent = (event)=>{
                console.log(event);
               // let name = event.target.name;
                //let value = event.target.value;
                let {name, value} = event.target;
                
                setData((preVal)=>{
                     return{
                         ...preVal,
                        [name] : value,      
                     }  
                })
        }

        const formSubmit= (e)=>{
            e.preventDefault();
            alert(`I am ${data.fullname}. My contact number is ${data.mobile}.
I can be also reached on ${data.email}. I just want to say that, ${data.message} `)
            setData({
                fullname:'',
                mobile:'',
                email:'',
                message:''
            });
        }

    return (
        <>
          <div className='my-4'>
              <h1 className='text-center'>Contact Us</h1>
          </div>
          <div className='container'>
            <div className='row'>
                <div className='col-md-5 col-8 mx-auto p-3'>
                    <form className='contactForm' onSubmit={formSubmit}>
                    <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label font-weight-bold">Full Name :</label>
                            <input name='fullname' value={data.fname} onChange={InputEvent} type="text" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter your Name" required/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label font-weight-bold">Contact :</label>
                            <input name='mobile' value={data.mobile} onChange={InputEvent} type="number" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="+91" required/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label font-weight-bold">Email address :</label>
                            <input name='email' value={data.email} onChange={InputEvent} type="email" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label font-weight-bold">Message :</label>
                            <textarea name='message' value={data.message} onChange={InputEvent} className="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3" required></textarea>
                        </div>
                        <div class="mb-3 btnPosition">
                            <button class="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                    
                </div>
            </div>
          </div>
        </>
        
    )
}

export default Contact;