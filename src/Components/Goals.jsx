import React from 'react';
import goals from '../Images/goals.png'

const Goals = () => {
    return (
        <section>
            <div className="custom-container">
                <div className="custom-row">
                    <div className="custom-column w-1/2">
                        <img src={goals} className=''/>
                    </div>
                    <div className="custom-column w-1/2">
                        <p className='color text-justify font-semibold'>
                            2000000000+ website exist around the world. And day by day the demand of website increasing. In the E-commerce sector website save huge infrastructure cost. Website is a virtual representation of a person, organization or business organization. In future every person will need a website for his representation. Usually , a company take lots of money for a website service. We want to change in this specific point. We will give website with the lowest cost which is bearable for all. This is our main goal.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Goals;