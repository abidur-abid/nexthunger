import React from 'react';
import ismail from '../Images/ismail.jpg'
import abid from "../Images/abid.jpeg"
import web from '../Images/web.png'
import linkedin from '../Images/linkedin.png'
import github from '../Images/github.png'

const TeamMembers = () => {
    return (
        <section>
            <div className="custom-container">
                <div className="custom-row">
                    <div className="custom-column w-1/3 mr-2">
                        <img src={ismail} className='custom-image rounded' />
                    </div>
                    <div className="custom-column w-2/3">
                        <h4 className='color text-3xl text-center mb-4'>Md. Ismail Hossain </h4>
                        <p className='custom-background rounded p-1 text-center mb-4'>Quality Assurance (QA) Engineer | Manual and Automation Testing</p>
                        <p className='color text-justify mb-4'>Hi there, I am over years of extensive and diversified experience in IT with emphasis on Software Quality Assurance, Manual and Automation Testing, Web, and Client/Server based applications. Profound understanding of Software Development Life Cycle (SDLC) and Software Testing Life Cycle.</p>
                        <div className='flex gap-4 justify-center'>
                            <a href="https://www.linkedin.com/in/md-ismail-hossain-0760791a8/"><img src={linkedin} className='w-12 h-12'/></a>
                            <img src={github} className='w-12 h-12'/>
                            <img src={web} className='w-12 h-12'/>
                            
                        </div>
                    </div>
                </div>
                <div className="custom-row mt-12">
                    
                    <div className="custom-column w-2/3">
                        <h4 className='color text-3xl text-center mb-4'>Abidur Rahman Abid </h4>
                        <p className='custom-background rounded p-1 text-center mb-4'>Full Stack Web Developer | MERN Stack</p>
                        <p className='color text-justify mb-4'>This is Abid, enthusiasm, and passionate for technology. I am an
                            adaptable and quick learner, continuously expanding my skill set and staying up-to-date with the
                            latest programming languages, frameworks, and industry best practices.</p>
                        <div className='flex gap-4 justify-center'>
                            <a href="https://www.linkedin.com/in/abid40/"><img src={linkedin} className='w-12 h-12'/></a>
                            <a href="https://github.com/abidur-abid"><img src={github} className='w-12 h-12'/></a>
                           <a href="https://client-23b8b.web.app/"> <img src={web} className='w-12 h-12'/></a>
                            
                        </div>
                    </div>
                    <div className="custom-column w-1/3 ml-2">
                        <img src={abid} className='custom-image rounded' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamMembers;