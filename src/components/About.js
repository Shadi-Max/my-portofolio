import './styles.css'

function About () {
    return (
        <div id='about'>
            <div className='title'>
                <p>Get to Know More </p>
                <h1>About Me</h1>
            </div>
            <div className='cards'>
                <div className='card-col'>
                    <i className="fa-solid fa-award"></i>
                    <h3>Experience</h3>
                    <p>1+ Years</p>
                    <p>Frontend Development</p>
                </div>

                <div className='card-col'>
                    <i className="fa-solid fa-building-columns"></i>
                    <h3>Education</h3>
                    <p>Meta Front-end Developer </p>
                    <p>Professional Certificate</p>
                </div>
            </div>
            <div className='about-txt'>
                <p>
                    I'm Shadi, a Junior Front-End developer with a love for beautiful designs and colors. I try to create responsive, functional and user friendly websites with focusing on creating simple beautiful ashtetics.
                </p>
            </div>
        </div>
    )
}

export default About;