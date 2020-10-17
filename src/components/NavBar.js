import React from 'react'
import './NavBar.css';


function NavBar(){



    let status="Welcome to our website"



return (<>
            <h1>{status}</h1>

            <div className="section__navbar">
  <nav className="navbar__default">
    <div className="container__fluid">
     
        <ul className="navbar__nav">
<li className="first leaf"><a href="/en" title="">Home</a></li>
<li className="leaf"><a href="/en/events" title="">Events</a></li>
<li className="leaf"><a href="/en/about__us" title="">About us</a></li>
<li className="leaf"><a href="/en/offers" title="">Offers</a></li>
<li className="leaf"><a href="/en/contact__us" title="">Contact us</a></li>
<li className="leaf"><a href="/en/services" title="">Services</a></li>
<li className="leaf"><a href="/en/exhibitors" title="">Exhibitors</a></li>
<li className="leaf"><a href="/en/friendly__sites" title="">Friendly sites</a></li>
<li className="last leaf"><a href="/en/jobs" title="">Jobs</a></li>
</ul>        
<ul className="navbar__right">
  <li className="first leaf active"><a href="/en/user/login" title="" className="active">Log in</a></li>
<li className="leaf"><a href="/en/who__are__you" title="">Register</a></li>
</ul>      
</div>
  </nav>
</div>

        </>

)

}





export default NavBar