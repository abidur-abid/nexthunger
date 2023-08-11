import React from 'react';
import web from '../Images/web.png'
import facebook from '../Images/facebook.png'
import linkedin from '../Images/linkedin.png'

const Formcontact = () => {
    return (
        <section>
            <div className="custom-container">
                <div className="custom-row">
                    <div className="custom-column w-2/3">
                        <form className="card-body">
                                <div className="form-control">
                                <input type="text" placeholder="Type Your Name" name='name' className="input input-bordered " />
                                </div>
                                <div className="form-control">
                            
                                <input type="email" placeholder="Enter Your Email Address" name='email' className="input input-bordered" />
                                
                                </div>
                                <div className="form-control">
                            
                                <textarea placeholder="Type Your Message" name='message' className="textarea textarea-bordered textarea-lg  w-full" ></textarea>
                                
                                </div>
                                <div className="form-control mt-4 flex">
                                
                                <input type="submit" value="SUBMIT" className="button color font-bold"/>
                                </div>
                        </form>
                    </div>
                    <div className="custom-column w-1/3">
                        <p className='color leading-10'>Email: nexthunger@gmail.com</p>
                        <p className='color leading-10'>Phone: 01568441078 ( Abid )</p>
                        <p className='color leading-10'>Phone: 01778325953 ( Ismail)</p>
                        <p className='color leading-10'>Website: nexthunger.com</p>
                        <div className='flex gap-4 items-center mt-8'>
                            <img src={web} className='w-12 h-12' />
                            <img src={facebook} className='w-12 h-12' />
                            <img src={linkedin} className='w-12 h-12' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Formcontact;