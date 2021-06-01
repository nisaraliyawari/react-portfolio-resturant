import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [state, setState] = React.useState(false);
    React.useEffect(() => {
     window.addEventListener("scroll", handleScroll);
    }, [])
    const handleScroll = () => {
        if(window.scrollY > 120) {
            setState(true); 
        } else {
            setState(false);
        }
    }
    return (
        <div className={`navbar ${state ? 'whiteBg' : 'transparent'} `}>
            <div className="container ">
                <div className="navbar__content ">
                    <div className="navbar__left"><img src={state ? '/images/dish-dark.png' : '/images/dish.png'} alt="logo"/></div>
                         <ul className="navbar__right">
                        <li><Link to='/'  > Home </Link> </li>
                        <li><Link to='/Gallery' > Gallery </Link> </li>
                        <li><Link to='/Reservation' > Reservation </Link> </li>
                        <li><Link to='/pizza' >PizzaHollic  </Link> </li>
                        <li><Link to='/PizzaShop' >PizzaShop  </Link> </li>
                        <li> <a href="http://beletti.com.au/">Contact</a> </li>
                        
                        </ul>
        
                </div>
            </div>
        </div>
    )
}

export default Navbar
