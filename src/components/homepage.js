import React from "react";
import ReactDOM from "react-dom";
import NavigationBar from "./navigation-bar";
import Banner from "./banner";

export default class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Banner />
            

            
            </div>
        )
    }
}
