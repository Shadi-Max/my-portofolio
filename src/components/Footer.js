function Footer () {
    return (
        <div className='footer'>
            <div className="contact">
                <div className='title'>
                    <p>Get In Touch</p>
                    <h1>Contact Me</h1>
                </div>
                <div className="contact-card">
                    <div className='contact-link-container'>
                        <i class="fa-solid fa-envelope"></i>
                        <li>
                            <a href="/">shadimaks93@gmail.com</a>
                        </li>
                    </div>
                    <div className='contact-link-container'>
                        <i className="fa-brands fa-linkedin"></i>
                        <li>
                            <a href="/">linkdIn</a>
                        </li>
                    </div>
                </div>
                <div className="footer-nav">
                    <ul>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/menu">Experience</a>
                        </li>
                        <li>
                            <a href="/reservation">Projects</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
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