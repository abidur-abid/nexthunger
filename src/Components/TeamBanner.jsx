import React from 'react';
import team from '../Images/team.png'

const TeamBanner = () => {
    return (
        <section>
            <div className="custom-container">
                <div className="custom-row">
                    <div className="custom-column w-1/2">
                        <h3 className='color'>We have an expert team. Our team is always ready to give website solution.</h3>
                        <button className='button color w-full'><i class="fa-solid fa-envelope mr-2"></i>Contact</button>
                    </div>
                    <div className="custom-column w-1/2">
                      <img src={team} className='custom-image'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamBanner;