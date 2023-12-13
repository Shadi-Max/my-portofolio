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
                    <h4>Little Lemon Restaurant</h4>
                    <div className='project-btn'>
                        <button className='cv-btn' onClick={() => window.open('https://github.com/Shadi-Max/little-lemon')}>
                            Github
                        </button>
                        <button className='cv-btn' onClick={() => window.open('https://little-lemon-berlin.netlify.app/')}>
                            Live Demo
                        </button>
                    </div>
                </div>
                <div className='card-col'>
                    <img src={ProjetPhoto2} alt='Project 2'></img>
                    <h4>My Portofolio</h4>
                    <div className='project-btn'>
                        <button className='cv-btn' onClick={() => window.open('https://github.com/Shadi-Max/my-portofolio')}>
                            Github
                        </button>
                        <button className='cv-btn' onClick={() => window.open('https://portofolio-shadi-max.netlify.app/')}>
                            Live Demo
                        </button>
                    </div>
                </div>
            </div>
            <div className='cards'>
                <div className='card-col'>
                    <img src={ProjetPhoto3} alt='Project 3'></img>
                    <h4>Simple Weather App</h4>
                    <div className='project-btn'>
                        <button className='cv-btn' onClick={() => window.open('https://github.com/Shadi-Max/Weather-app')}>
                            Github
                        </button>
                        <button className='cv-btn' onClick={() => window.open('https://weather-app-shadi.netlify.app/')}>
                            Live Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;