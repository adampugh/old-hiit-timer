import React from "react";
import NavbarLoggedIn from "../navbar-loggedin";
import StartWorkoutContent from "./startworkoutcontent";
import Footer from "../footer";


export default class StartWorkoutPage extends React.Component {
    render() {
        return (
            <div>
                <NavbarLoggedIn />
                <StartWorkoutContent />
                <Footer />
            </div>
        )
    }
}