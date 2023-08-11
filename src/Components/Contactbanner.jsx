import React from 'react';
import contact from '../Images/contact.png'

const Contactbanner = () => {
    return (
        <section>
            <div className="custom-container">
                <div className="custom-row">
                    <div className="custom-column w-1/2">
                        <img src={contact} className='custom-image'/>
                    </div>
                    <div className="custom-column w-1/2">
                        <h3 className='color'>Feel Free To Contact With Us. We read all the message with more importance.</h3>
                        <button className='button color w-full'><i class="fa-solid fa-envelope mr-2"></i>Contact</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contactbanner;