import { Link } from 'react-scroll';

function Footer () {
    return (
        <div className='footer'>
            <div id='contact' className="contact">
                <div className='title'>
                    <p>Get In Touch</p>
                    <h1>Contact Me</h1>
                </div>
                <div className="contact-card">
                    <div className='contact-link-container'>
                        <i class="fa-solid fa-envelope"></i>
                        <li>
                            <a href="mailto:shadimaks93@gmail.com">shadimaks93@gmail.com</a>
                        </li>
                    </div>
                    <div className='contact-link-container'>
                        <i className="fa-brands fa-linkedin"></i>
                        <li>
                            <a href="https://www.linkedin.com/in/shadi-max-0572a82a4/">linkdIn</a>
                        </li>
                    </div>
                </div>
                <div className="footer-nav">
                    <ul>
                        <li>
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={100}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="experience"
                                spy={true}
                                smooth={true}
                                duration={100}
                            >
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={100}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={100}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='copyright'>
                    <p>Copyright © 2023 Shadi Max. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;