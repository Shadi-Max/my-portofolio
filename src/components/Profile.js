import React from 'react';
import './styles.css'
import profilePhoto from '../assets/profile-photo.png';

function Profile () {
    return (
        <main>
            <div className='profile'>
                <div className='profile-img'>
                    <img src={profilePhoto} alt='Profile Photo'/>
                </div>
                <div className='profile-info'>
                    <div className='title'>
                        <p>Hi, I'm</p>
                        <h1>Shadi Max</h1>
                        <h2>Frontend Developer</h2>
                    </div>
                    <div className='my-infos'>
                        <button className='cv-btn' onClick={() => window.open('./assets/lebenslauf-Shadi-Max.pdf')}>
                            Download CV
                        </button>
                        <button className='ct-btn' href="/">
                            Contact Info
                        </button>
                    </div>
                    <div className='social-links'>
                        <button className='s-btn' onClick={() => window.open('https://github.com/Shadi-Max')}>
                        <i className="fa-brands fa-github"></i>
                        </button><button className='s-btn' onClick={() => window.open('https://www.linkedin.com/')}>
                        <i className="fa-brands fa-linkedin"></i>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Profile;