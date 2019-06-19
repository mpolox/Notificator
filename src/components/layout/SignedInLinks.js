import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLinks = () => {
  return(
    <ul className="right">
      <li><NavLink to='/new'>New Project</NavLink></li>
      <li><NavLink to='/logOut'>Log Out</NavLink></li>
      <li><NavLink to='/profile' className='btn btn-floating teal darken-1'>MP</NavLink></li>
    </ul>   
  )
}

export default SignInLinks
