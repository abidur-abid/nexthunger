import React from 'react';
import NumberCounter from 'number-counter';
import client from '../Images/client.png'
import project from '../Images/project.png'
import satisfaction from '../Images/satisfaction.png'


const Counter = () => {
    return (
       <section>
        <div className="custom-container">
            <div className="custom-row ">
                <div className="custom-column border-4 rounded w-64 h-56">
                    <img src={project} className='w-10 h-10 mx-auto m-4' />
                    <NumberCounter end={35} delay={5} className="increment color font-bold text-5xl text-center m-4"  postFix="+"/>
                    <h4 className='color m-4 text-center'>Completed Projects</h4>
                    
                </div>
                <div className="custom-column border-4 rounded w-64 h-56">
                    <img src={client} className='w-10 h-10 mx-auto m-4' />
                    <NumberCounter end={100} delay={5} className="increment color font-bold text-5xl text-center m-4"  postFix="%"/>
                    <h4 className='color m-4 text-center'>Clients Satisfaction</h4>
                    
                </div>
                <div className="custom-column border-4 rounded w-64 h-56">
                    <img src={satisfaction} className='w-10 h-10 mx-auto m-4' />
                    <NumberCounter end={6} delay={5} className="increment color font-bold text-5xl text-center m-4"  postFix="+"/>
                    <h4 className='color m-4 text-center'>Total Happy Clients</h4>
                    
                </div>
             
            </div>
        </div>
       </section>
    );
};

export default Counter;