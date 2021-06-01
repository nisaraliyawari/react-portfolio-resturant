import React from 'react'

const About = () => {
    const FastFood =   "/images/ff.jpg"
    const SeaFood =   "/images/sf.jpg"
    const Coffee =   "/images/c.jpg"
    const [state] = React.useState({heading: ' OUR STORY !', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo possimus voluptatum qui quae accusantium porro rerum sit quod, atque quos necessitatibus sunt architecto, quaerat repellendus culpa nemo amet voluptatibus ab? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed numquam magni illo. Nemo provident nobis vero, autem sint officia porro. Provident similique aliquam voluptate sunt minus doloremque pariatur quidem necessitatibus!'});
    const [sections] = React.useState([
        {id: 1, icon: <img className= "images" src={FastFood} alt= "our menu" />},
        {id: 2, icon: <img className= "images" src={SeaFood} alt= "our menu" />},
        {id: 3, icon: <img className= "images" src={Coffee} alt= "our menu" />},
    ]);
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-3">
    <h4 className="about__h4">{state.heading}</h4>
                    </div>
                    <div className="col-9">
                        <div className="about__text">
    <p>{state.text}</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-60">
                    {sections.map(section => (
                        <div className="col-4 pl-15" key={section.id}>
                    <div className="about__section">
                        <div className="about__section-icon">
                        {section.icon}
                        </div>
                        <div className="about__section-heading">
                            <h6>{section.heading}</h6>
                        </div>
                        <div className="about__section-text">
                    <p>{section.text}</p>
                        </div>
                    </div>
                </div>
                    ))}
                
            </div>
            </div>
            
        </div>
    )
}

export default About
