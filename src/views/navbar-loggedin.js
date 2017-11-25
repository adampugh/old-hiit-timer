import React from "react";

class NavbarLoggedIn extends React.Component {

    handleHamburgerClick() {
        $(".menu").slideToggle("slow");
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
                                <a href="#">Workouts</a>
                                <a href="#">Create</a>
                                <a href="#">Logout</a>
                            </div>
                            <div className="menu--desktop">
                                <a href="#">Workouts</a>
                                <a href="#">Create</a>
                                <a href="#">Logout</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
    
}

export default NavbarLoggedIn;