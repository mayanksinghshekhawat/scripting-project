import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useSpring, animated } from 'react-spring';
function Header() {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)', color: 'black' }, // Initial color is black
    to: { opacity: 1, transform: 'translateY(0px)', color: 'white' }, // Final color is white
    config: { duration: 500, tension: 120, friction: 20 },
  });
  const propsMatch = useSpring({
    from: { opacity: 0, transform: 'translateY(50px) translateX(20px)', color: 'black' }, // Initial color is black and slight right translation
    to: { opacity: 1, transform: 'translateY(0px) translateX(10px)', color: 'white' }, // Final color is white and slight right translation
    config: { duration: 500, tension: 120, friction: 20 },
  });
  return (
    <>
    
    <div className="header">
    {/* <div><Link to="/">HOME</Link>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
    </div> */}
    <nav className='main-nav'>
    <div class="right">
           <ul>
            <li>
              <a href="#">buy</a>
            </li>
            <li>
              <a href="#">rent</a>
            </li>
            <li>
              <a href="#">mortgage</a>
            </li>
           </ul>
          </div>


          <div className='logo'>
        <h2>
          <span>PG</span>
          <span>F</span>inder
        </h2>
      </div>
      

    <div className="menu-link">
        <ul className='menu-link-desktop'>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">signup</a>
          </li>
          <li>
            <a href="#">login</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
        </ul>  
    </div>
    </nav>
    <animated.div className="hero-text" style={props}>
  <h1 >Homes</h1>
</animated.div>
<animated.div className="hero-text2" style={propsMatch}>
  <h1 >That Match</h1>
</animated.div>
    </div>
    </>
  )
  
}

export default Header