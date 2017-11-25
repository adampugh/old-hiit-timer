import React from "react";
import ReactDOM from "react-dom";
import NavbarLoggedOut from "../navbar-loggedout";
import Banner from "./banner";
import HomeContent from "./homecontent";
import Footer from "../footer";


export default class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <NavbarLoggedOut />
                <Banner />
                <HomeContent />
                <Footer />            
            </div>
        )
    }
}
