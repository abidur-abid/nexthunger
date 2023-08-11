import React from 'react';
import homeBanner from '../Images/banner.png'


const Banner = () => {
    return (
       <section>
        <div className="custom-container">
            <div className="custom-row">
                <div className="custom-column w-1/2">
                    <h3 className='color '>Take Your Website Solution With The lowest Cost In The World.</h3>
                    <button className='button color w-full'><i class="fa-solid fa-envelope mr-2"></i>Contact</button>
                </div>
                <div className="custom-column w-1/2">
                    <img src={homeBanner} className='custom-image' />
                </div>
            </div>
        </div>
       </section>
    );
};

export default Banner;