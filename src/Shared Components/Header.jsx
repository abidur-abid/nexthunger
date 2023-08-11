
import React, { useState } from 'react';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
// import useAuth from '../Hooks/useAuth';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
//   const { user } = useAuth();

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    console.log(mobileMenu);
  };

  return (
    <div className="relative z-30 sticky top-0">
    <header className="mobile-menu-parent-position laptop-header-position  sticky top-0 ">
      <div className="custom-container sticky top-0">
        <div className="header-custom-row">
          <div className="custom-column mt-4">
            <Link to='/'><img src={logo} className="custom-logo" alt="Logo" /></Link>
          </div>

        <div className='flex justify-center items-center gap-4'>
        <div className='flex gap-4'>
        
        </div>
        
        <div className="custom-column">
            <div className=''>
            
                {mobileMenu ? (
                <button onClick={handleMobileMenu} className="flex justify-center items-center custom-mobile-menu">
                    <i className="fa-solid fa-bars text-white"></i>
                </button>
                ) : (
                <div className="mobile-menu-position w-60 h-fit pl-12 pr-20 rounded ">
                    <div onClick={handleMobileMenu}>
                    <button>
                        <i className="fa-solid fa-minus text-white"></i>
                    </button>
                    <div className="grid grid-cols-1 justify-start gap-4 my-4 mobile-menu overflow-auto">
                        <Link to='/' className='font-bold'><i class="fa-solid fa-house mr-2"></i>Home</Link>
                        <Link to='/services' className='font-bold'><i class="fa-solid fa-laptop mr-2"></i>Services</Link>
                        <Link to='/team'  className='font-bold'><i class="fa-solid fa-people-group mr-2"></i>Team</Link>
                        <Link to='/projects' className='font-bold'><i class="fa-solid fa-diagram-project mr-2"></i>Projects</Link>
                        <Link to='/blogs' className='font-bold'><i class="fa-solid fa-blog mr-2"></i>Blogs</Link>
                        <Link to='/contact' className='font-bold'><i class="fa-solid fa-envelope mr-2"></i>Contact</Link>
                        <Link className='font-bold'><i class="fa-solid fa-right-to-bracket mr-2"></i>Log In</Link>
                        <Link className='font-bold'><i class="fa-solid fa-cart-shopping  border-0"></i></Link>

         
                    </div>
                    </div>
                </div>
                )}
            </div>
          </div>
        
        </div>

        </div>
      </div>
    </header>
  </div>
  );
};

export default Header;