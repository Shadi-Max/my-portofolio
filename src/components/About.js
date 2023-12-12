import './styles.css'

function About () {
    return (
        <>
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
                    <p>DCI Webdesign</p>
                </div>
            </div>
            <div className='about-txt'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic quis reprehenderit et laborum, rem, dolore eum quod voluptate exercitationem nobis,
                    nihil esse debitis maxime facere minus sint delectus velit in eos quo officiis explicabo deleniti dignissimos.
                    Eligendi illum libero dolorum cum laboriosam corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga!
                </p>
            </div>
        </>
    )
}

export default About;