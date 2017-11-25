import React from "react";

export default class Workouts extends React.Component {
    render() {
        return (
            <div className="workouts">
                <h1>Workouts</h1>
                <div className="container">
                    <div className="grid--3to1">

                    <div className="workout">
                        <div className="workout__box">
                            <h3>Cardio Workout</h3>
                            <h3>25 mins</h3>
                            <i className="fa fa-play-circle" aria-hidden="true"></i>
                        </div>
                        <div className="workout__links">
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div className="workout">
                        <div className="workout__box">
                            <h3>Cardio Workout</h3>
                            <h3>25 mins</h3>
                            <i className="fa fa-play-circle" aria-hidden="true"></i>
                        </div>
                        <div className="workout__links">
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div className="workout">
                        <div className="workout__box">
                            <h3>Cardio Workout</h3>
                            <h3>25 mins</h3>
                            <i className="fa fa-play-circle" aria-hidden="true"></i>
                        </div>
                        <div className="workout__links">
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        )
    }
}