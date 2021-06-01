import React from 'react'

const Portfolio = () => {
    const [state] = React.useState([
        {id: 1, image: "/images/1.1.jpg", name: 'Fast Food', expert: 'Cowboy Fry Bread'},
        {id: 2, image: "/images/1.2.jpg", name: 'Sea Food', expert: 'streamed mussels'},
        {id: 3, image: "/images/1.3.jpg", name: 'Drink', expert: 'Sherry Sangaree'},
    ]);
    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolio__section">
                <div className="row">
                <div className="col-4">
                    <div className="portfolio__content">
                        <h6 className="portfolio__content-h6"> Most Loved</h6>
                        <h5 className="portfolio__content-h3">Some of Our Favorites</h5>
                    </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            {state.map(user => (
                                <div className="col-4 pl-15" key={user.id}>
                             <div className="portfolio__card">
                                 <div className="portfolio__card-img">
                                     <img src={user.image} alt="card"/>
                                 </div>
                            <h5 className="portfolio__card-name">{user.name}</h5>
                            <p className="portfolio__card-expert">{user.expert}</p>
                             </div>
                            </div>
                            ))}
                            
                           
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
