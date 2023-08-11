import React from 'react';
import services  from '../Images/services.png';

const ServicesBanner = () => {
    return (
        <section>
        <div className="custom-container">
            <div className="custom-row">
                <div className="custom-column w-1/2">
                    <div className='grid grid-cols-2 gap-4'>
                        <p className='custom-background rounded text-center'>Portfopo Website</p>
                        <p className='custom-background rounded text-center'>Organization Website</p>
                        <p className='custom-background rounded text-center'>Personal Website</p>
                        <p className='custom-background rounded text-center'>News Website</p>
                        <p className='custom-background rounded text-center'>Blog Website</p>
                        <p className='custom-background rounded text-center'>E-commerce Website</p>
                        
                    </div>
                    
                </div>
                <div className="custom-column w-1/2">
                    <img src={services}  className='custom-image'/>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ServicesBanner;