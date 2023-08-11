import React from 'react';
import blog from '../Images/blogs.png'

const Blogbanner = () => {
    return (
        <section>
            <div className="custom-container">
                <div className="custom-row">
                    <div className="custom-column w-1/2">
                        <h3 className='color'>We are with you as learning Partner. Explore different types of technology with us.</h3>
                        <button className='button color w-full'><i class="fa-solid fa-envelope mr-2"></i>Contact</button>
                    </div>
                    <div className="custom-column w-1/2">
                        <img src={blog} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogbanner;