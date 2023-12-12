import './styles.css'
import ProjetPhoto1 from '../assets/project-photo-1.png';
import ProjetPhoto2 from '../assets/project-photo-2.png';
import ProjetPhoto3 from '../assets/project-photo-3.png';

function Projects () {
    return (
        <div className="projects">
            <div className='title'>
                <p>Browse My Recent</p>
                <h1>Projects</h1>
            </div>
            <div className='cards'>
                <div className='card-col'>
                    <img src={ProjetPhoto1} alt='Project 1'></img>
                    <h4>Project one</h4>
                    <div className='project-btn'>
                        <button className='cv-btn' onClick={() => window.open('./assets/lebenslauf-Shadi-Max.pdf')}>
                            Github
                        </button>
                        <button className='cv-btn' onClick={() => window.open('./assets/lebenslauf-Shadi-Max.pdf')}>
                            Live Demo
                        </button>
                    </div>
                </div>
                <div className='card-col'>
                    <img src={ProjetPhoto2} alt='Project 2'></img>
                    <h4>Project two</h4>
                    <div className='project-btn'>
                        <button className='cv-btn' onClick={() => window.open('./assets/lebenslauf-Shadi-Max.pdf')}>
                            Github
                        </button>
                        <button className='cv-btn' onClick={() => window.open('./assets/lebenslauf-Shadi-Max.pdf')}>
                            Live Demo
                        </button>
                    </div>
                </div>
            </div>
            <div className='cards'>
                <div className='card-col'>
                    <img src={ProjetPhoto3} alt='Project 3'></img>
                    <h4>Project Three</h4>
                    <div className='project-btn'>
                        <button className='cv-btn' onClick={() => window.open('./assets/lebenslauf-Shadi-Max.pdf')}>
                            Github
                        </button>
                        <button className='cv-btn' onClick={() => window.open('./assets/lebenslauf-Shadi-Max.pdf')}>
                            Live Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;