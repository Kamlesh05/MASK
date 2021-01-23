import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';

// const remove = ()=>{
//   // alert('I am in')
//   let act = document.getElementById('menu1');
//   act.classList.remove('default');
// }

// const hideNav = ()=>{
//     document.querySelectorAll('.navbar-collapse collapse').style.visibility ='hidden';
//     // // document.querySelectorAll(".navbar-collapse").collapse.forEach(e => e.style.visibility = "hidden");
//     // document.querySelector('navbarSupportedContent').classList.toggle(navbar-collapse);
   
// }



const Navbar = ()=>{
    return(
        <header className='px-0 w-100'>
        <div className='col-md-10 col-12 mx-auto py-3'>
        <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink to='/home' className="navbar-brand">MASK</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active" >
        <NavLink className="nav-link" to="/home" activeClassName='menuActive'>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/service" activeClassName='menuActive'>Services </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"  to="/about" activeClassName='menuActive'>About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact" activeClassName='menuActive'>Contact</NavLink>
      </li>
    </ul>
  </div>
</nav>
</div>
</header>

    );
}

export default Navbar;