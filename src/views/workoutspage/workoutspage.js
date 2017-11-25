import React from "react";
import NavbarLoggedIn from "../navbar-loggedin";
import WorkoutPageBanner from "./workoutspage-banner";
import Workouts from "./workouts";
import Footer from "../footer";

export default class WorkoutPage extends React.Component {
    render() {
        return (
            <div>
                <NavbarLoggedIn />
                <WorkoutPageBanner />
                <Workouts />
                <Footer />
            </div>
        )
    }
}