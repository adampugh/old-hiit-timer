import React from "react";
import ReactDOM from "react-dom";
import NavigationBar from "./navigation-bar";
import Banner from "./banner";
import HomeContent from "./homecontent";
import Footer from "./footer";


export default class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Banner />
                <HomeContent />
                <Footer />

            
            </div>
        )
    }
}
