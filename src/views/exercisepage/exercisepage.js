import React from "react";
import NavbarLoggedIn from "../navbar-loggedin";
import ExerciseForm from "./exerciseform";
import Footer from "../footer";

export default class ExercisePage extends React.Component {
    render() {
        return (
            <div>
                <NavbarLoggedIn />
                <ExerciseForm />
                <Footer />
            </div>
        )
    }
}