import React from 'react';
import headshot from '../images/cello-headshot.JPG';

const About = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-5'>
                        Headshot here?
                        <img src={headshot} height='100' width='100' alt='headshot' />
                    </div>
                    <div className='col'>This is what I'm about! </div>
                </div>
            </div>
        </div>
    );
}

export default About;