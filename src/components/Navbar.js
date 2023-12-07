import React, { Component } from 'react';
import './styles.css'

class Nav extends Component {
    state = { clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
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