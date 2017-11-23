import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import './styles/styles.scss';
import HomePage from "./components/homepage";

class App extends React.Component {
    render() {
        return (
            <HomePage />
        )
    };
};




ReactDOM.render(<App />, document.getElementById("app"));