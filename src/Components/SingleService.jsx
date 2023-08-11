import React from 'react';
import portfolio from '../Images/portfolio.png'
import news from '../Images/news.png'
import ecom from '../Images/ecom.png'

const SingleService = () => {
    return (
        <section>
            <div className="custom-container">
                <div className="custom-row">
                    <div className="custom-column w-1/3">
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={portfolio} alt="Shoes" className="rounded-xl w-48 h-48" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h3 className='color'>14500 BDT</h3>
                            <h2 className="card-title color">Personal / Organization</h2>
                            <p className='color'>Website</p>
                            <div className="card-actions">
                            <button className="button color">Book Service</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="custom-column w-1/3">
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={news} alt="Shoes" className="rounded-xl w-48 h-48" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h3 className='color'>16500 BDT</h3>
                            <h2 className="card-title color">Personal / Organization</h2>
                            <p className='color'>Website</p>
                            <div className="card-actions">
                            <button className="button color">Book Service</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="custom-column w-1/3">
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={ecom} className="rounded-xl w-48 h-48" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h3 className='color'>19500 BDT</h3>
                            <h2 className="card-title color">Personal / Organization</h2>
                            <p className='color'>Website</p>
                            <div className="card-actions">
                            <button className="button color">Book Service</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default SingleService;