import React from 'react';
import logo from '../Images/logo.png'
// import footer1 from '../Images/footerImg1.webp'
// import footer2 from '../Images/footerImg2.webp'
// import footer3 from '../Images/footerImg3.webp'
import { Link } from 'react-router-dom';
import { Map, Marker } from 'pigeon-maps';
// import SocialLink from './SocialLink';
// import SocialLink from './SocialLink';


const Footer = () => {
    // 24.7601
    // 90.4408
    return (
        <footer >
            <div className="custom-container">
                <div className="custom-row my-4">
                    <div className="custom-column alhpa-column">
                       <img src={logo} className='custom-logo footer-logo'/>

                       <h4 className='text-white'>Websites Solution Company</h4>
                       <div className='alpha-link'>
                       {/* <SocialLink></SocialLink> */}
                       </div>
                       <p className='text-white '>Trishal, Mymensingh</p>
                       <p className='text-white '>Bangladesh</p>
                    </div>
                    
                    <div className="custom-column alhpa-column w-1/3">
                     <div className=' w-full mx-auto '>
                     <Map height={170} defaultCenter={[24.5654, 90.3947]} defaultZoom={11} className="-z-50">
                        <Marker width={50} anchor={[24.5654, 90.3947]} />
                    </Map> 
                    </div>  
                    </div>
                    <div className="custom-column alhpa-column">
                        <h4 className='text-white'>Pages</h4>
                            <p><Link ><i class="fa-solid fa-house mr-2"></i>Home</Link></p>
                            <p><Link ><i class="fa-solid fa-laptop mr-2"></i>Services</Link></p>
                            <p><Link ><i class="fa-solid fa-envelope mr-2"></i>Contact</Link></p>    
                    
                    </div>
                  
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;