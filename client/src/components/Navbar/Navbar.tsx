import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);

    return (
        <div>
                <nav className="navbar">
                    <div className="navbar-container">
                            <Link to="/" className="navbar-logo">
                                Carlston G.  <i className="fab fa-affiliatetheme"/>
                            </Link>
                            <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                            </div>
                            <ul className={click ? 'nav-menu activ' : 'nav-menu'}> 
                           
                                <li className="nav-item">
                                    <Link to="/VideoList" className="nav-links" onClick={closeMobileMenu}>
                                        Memories
                                    </Link>
                            
                                </li>
                                <li className="nav-item">
                                    <Link to="/VideoForm" className="nav-links" onClick={closeMobileMenu}>
                                        Store Memories
                                    </Link>

                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                        Contacts
                                    </Link>
                            
                                </li>
                            </ul>
                       
                    </div>
                </nav>     
        </div>
    )
}
