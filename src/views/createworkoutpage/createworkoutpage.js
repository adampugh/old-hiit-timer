import React from "react";
import NavbarLoggedIn from "../navbar-loggedin";
import WorkoutForm from "./workoutform";

export default class CreateWorkoutPage extends React.Component {
    render() {
        return (
            <div>
                <NavbarLoggedIn />
                <WorkoutForm />
            </div>
        )
    }
}