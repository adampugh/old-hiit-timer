import React from "react";

class NavigationBar extends React.Component {



    render() {
        return (
            <div className="container">
                <nav className="row">
                    <div className="navigation-bar">
                        <div className="navigation-bar__logo">
                            <h1 className="logo">HIIT Timer</h1>
                        </div>
                        <div className="navigation-bar__links">
                            <a className="hamburger-icon">&#9776;</a>
                            <div className="menu">
                                <a href="#">Sign Up</a>
                                <a href="#">Login</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
    
}

export default NavigationBar;