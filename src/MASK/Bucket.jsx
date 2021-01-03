import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';
import './Index.css';


const Bucket = ()=>{
    return(
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <Navbar/>
                </div>
            </div>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/home' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/contact' component={Contact}></Route>
                <Route exact path='/service' component={Service}></Route>
                <Redirect to='/'/>
            </Switch>
            <Footer/>
        </>
        
    )

}

export default Bucket;