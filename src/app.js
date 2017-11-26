import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import './styles/styles.scss';
import HomePage from "./views/homepage/homepage";
import WorkoutsPage from "./views/workoutspage/workoutspage";
import CreateWorkoutPage from "./views/createworkoutpage/createworkoutpage";


class App extends React.Component {
    render() {
        return (
            // <HomePage />
            // <WorkoutsPage />
            <CreateWorkoutPage />
        )
    };
};




ReactDOM.render(<App />, document.getElementById("app"));