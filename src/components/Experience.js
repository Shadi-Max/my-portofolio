import './styles.css'

function Experience () {
    return (
        <div id='experience' className='experience'>
            <div className='title'>
                <p>Explore My</p>
                <h1>Experience</h1>
            </div>
            <div className='cards'>
                <div className='card-col'>
                    <h4>Frontend Developement</h4>
                    <div className='exp'>
                        <div className='exp-col'>
                            <div className='exp-card'>
                                <i className="fa-brands fa-html5"></i>
                                <h3>HTML</h3>
                                <p>Experienced</p>
                            </div>
                            <div className='exp-card'>
                                <i class="fa-brands fa-js"></i>
                                <h3>JavaScript</h3>
                                <p>Intermediate</p>
                            </div>
                            <div className='exp-card'>
                                <i class="fa-solid fa-code"></i>
                                <h3>Typescript</h3>
                                <p>Basic</p>
                            </div>
                        </div>
                        <div className='exp-col'>
                            <div className='exp-card'>
                                <i class="fa-brands fa-css3-alt"></i>
                                <h3>CSS</h3>
                                <p>Experienced</p>
                            </div>
                            <div className='exp-card'>
                                <i class="fa-brands fa-react"></i>
                                <h3>React</h3>
                                <p>Intermediate</p>
                            </div>
                            <div className='exp-card'>
                                <i class="fa-brands fa-sass"></i>
                                <h3>SASS</h3>
                                <p>Intermediate</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-col'>
                    <h4 className='ui-title'>UI/UX & Other Skills</h4>
                    <div className='exp'>
                        <div className='exp-col'>
                            <div className='exp-card'>
                                <i class="fa-brands fa-node-js"></i>
                                <h3>Node JS</h3>
                                <p>Intermediate</p>
                            </div>
                            <div className='exp-card'>
                                <i class="fa-brands fa-figma"></i>
                                <h3>Figma</h3>
                                <p>Intermediate</p>
                            </div>
                            <div className='exp-card'>
                                <i class="fa-regular fa-window-restore"></i>
                                <h3>Material UI</h3>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div className='exp-col'>
                            <div className='exp-card'>
                                <i class="fa-brands fa-square-git"></i>
                                <h3>Git</h3>
                                <p>Intermediate</p>
                            </div>
                            <div className='exp-card'>
                                <i class="fa-solid fa-pen"></i>
                                <h3>Canva</h3>
                                <p>Experienced</p>
                            </div>
                            <div className='exp-card'>
                                <i class="fa-brands fa-bootstrap"></i>
                                <h3>Bootstrap</h3>
                                <p>Intermediate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;