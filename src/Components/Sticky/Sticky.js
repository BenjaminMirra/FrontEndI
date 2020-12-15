import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sticky.css';
import logoFac from './Facebook.png';
import logoTwi from './Twitter.png';
import logoInst from './Instagram.png';
import logoHome from './Home.png';

const Sticky = () => {
    return (
        <React.Fragment>
    <div className="social-icon container">
      <ul className="stick">
        <li className="primero">
          <a title="Facebook" target="_blank"rel="noreferrer"  href="https://facebook.com/">
          <img width="45" height="45" src={logoFac} alt="logo"/>
          </a>
        </li>
        <li className="segundo"> 
          <a title="Twitter" target="_blank" rel="noreferrer" href="https://twitter.com/?lang=en">
          <img width="40" height="40" src={logoTwi} alt="logo"/>
          </a>
        </li>
        <li className="tercero">
          <a title="Instagram" target="_blank" rel="noreferrer" href="https://instagram.com/">
          <img width="40" height="40" src={logoInst} alt="logo"/>
          </a>
        </li>
        <li className="cuarto"> 
          <a title="Home" target="_blank" rel="noreferrer" href="/">
          <img width="40" height="40" src={logoHome} alt="logo"/>
          </a>
        </li>
      </ul>
    </div>
        </React.Fragment>
    )

}

export default Sticky;