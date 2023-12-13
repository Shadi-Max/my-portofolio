import React from 'react';
import './styles.css'
import profilePhoto from '../assets/profile-photo.png';
import pdfFile from '../assets/Lebenslauf-Shadi-Max.pdf';
import { Link } from 'react-scroll';

function Profile () {
    const openPdfInNewTab = () => {
        window.open(pdfFile, '_blank');
    };

    return (
        <main>
            <div className='profile'>
                <div className='profile-img'>
                    <img src={profilePhoto} alt='Profile'/>
                </div>
                <div className='profile-info'>
                    <div className='title'>
                        <p>Hi, I'm</p>
                        <h1>Shadi Max</h1>
                        <h2>Frontend Developer</h2>
                    </div>
                    <div className='my-infos'>
                        <button className='cv-btn' onClick={openPdfInNewTab}>
                            Download CV
                        </button>
                        <Link className='btn-link'
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={100}
                            >
                                    Contact Info
                        </Link>
                    </div>
                    <div className='social-links'>
                        <button className='s-btn' onClick={() => window.open('https://github.com/Shadi-Max')}>
                        <i className="fa-brands fa-github"></i>
                        </button><button className='s-btn' onClick={() => window.open('https://www.linkedin.com/in/shadi-max-0572a82a4/')}>
                        <i className="fa-brands fa-linkedin"></i>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Profile;