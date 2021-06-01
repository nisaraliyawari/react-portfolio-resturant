import React  from 'react';
import { NavLink } from 'react-router-dom'




const Error = () =>  {
    
    return (

        <>
        <div className="container">
            <div className="mt-5"><h1 className = "alert alert-light "> "404 Error" Sorry, no page found</h1></div>
        
        <NavLink to="/" className="alert alert-danger LinkError "> Go to Home page </NavLink>
        
            
        </div>
        </>
    );
};



export default Error;
