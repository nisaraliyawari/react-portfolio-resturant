import React from 'react'

const Header = () => {
    const [state] = React.useState({heading: 'EAT  DRINK VISIT ', link1: 'About us', link2: 'Order now'})
    return (
        <div className="header">
            <div className="header__content">
    <h1 className="header__content-h1">{state.heading}</h1>
                <div className="header__content-links">
    <a href="https://hunter-demo.squarespace.com/?nochrome=true">{state.link1}</a>
                    <span className="header__content-span"></span>
    <a href="https://tremont-demo.squarespace.com/home-tremont">{state.link2}</a>
  
                </div>
            </div>
        </div>
    )
}

export default Header
