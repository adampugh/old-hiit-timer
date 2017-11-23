import React from "react";

class NavigationBar extends React.Component {

    handleHamburgerClick() {
        $(".menu").slideToggle("slow", () => {
            console.log("slid");
        });
    }


    render() {
        return (
            <div className="container">
                <nav className="row">
                    <div className="navigation-bar">
                        <div className="navigation-bar__logo">
                            <h1 className="logo">HIIT Timer</h1>
                        </div>
                        <div className="navigation-bar__links">
                            <label className="hamburger-icon" onClick={this.handleHamburgerClick}>&#9776;</label>
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