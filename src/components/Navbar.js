import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './styles.css'

class Nav extends Component {
    state = { clicked: false};

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked}); // handling the state for hamburger menu
    };

    render () {
    return (
        <nav className="navbar">
            <div className='logo'>
                Shadi Max
            </div>

            <div>
                <ul className={this.state.clicked ?
                ".navbar ul active" : ".navbar ul"}>
                    <li>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={100}
                            onClick={this.handleClick}
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
                            onClick={this.handleClick}
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
                            onClick={this.handleClick}
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
                            onClick={this.handleClick}
                        >
                                Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='menu-mobile' onClick={this.handleClick}>
                <i
                  id='bar'
                  className=
                  {this.state.clicked ?
                    'fas fa-times' :
                    'fas fa-bars'
                    }
                ></i>
            </div>
        </nav>
    );
}
}

export default Nav;