import React from 'react';
import projects from '../Images/projects.png'

const Projectbanner = () => {
    return (
        <section>
            <div className="custom-container">
                <div className="custom-row">
                    <div className="custom-column w-1/2">
                        <img src={projects}  />
                    </div>
                    <div className="custom-column w-1/2">
                        <h3 className='color'>We have already completed various projects. Let's see our projects.</h3>
                        <button className='button color w-full'><i class="fa-solid fa-envelope mr-2"></i>Contact</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projectbanner;