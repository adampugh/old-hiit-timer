import React from "react";


// gut this - use modal instead
export default class WorkoutForm extends React.Component {
    render() {
        return (
            <div>
            <div className="workoutform container">
                <form>
                    <div className="workoutform__title">
                        <h1>Workout Title</h1>
                        <input type="text" />
                    </div>
                    <hr />
                    <div className="grid--2to1">
                        <div className="workoutform__exerciselist">
                            <div className="workoutform__exercise">
                                <div className="workoutform__box">
                                    <h3>Jumping Jacks</h3>
                                    <p>2 mins</p>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </div>
                                <div className="workoutform__break">
                                    <h3>Break</h3>
                                    <p>2 mins</p>
                                </div>
                            </div>

                            <div className="workoutform__exercise">
                                <div className="workoutform__box">
                                    <h3>Press Ups</h3>
                                    <p>2 mins</p>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </div>
                                <div className="workoutform__break">
                                    <h3>Break</h3>
                                    <p>2 mins</p>
                                </div>
                            </div>

                            <div className="workoutform__exercise">
                                <div className="workoutform__box">
                                    <h3>Squats</h3>
                                    <p>2 mins</p>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </div>
                                <div className="workoutform__break">
                                    <h3>Break</h3>
                                    <p>2 mins</p>
                                </div>
                            </div>

                            <div className="workoutform__exercise">
                                <div className="workoutform__box">
                                    <h3>Squats</h3>
                                    <p>2 mins</p>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </div>
                                <div className="workoutform__break">
                                    <h3>Break</h3>
                                    <p>2 mins</p>
                                </div>
                            </div>

                            <hr />

                            <div className="workoutform__add-exercise">
                                <button className="orange-btn">
                                    Add Exercise
                                </button>
                            </div>
                        </div>
                        <div className="workoutform__preview">
                            <img src={require("../../../public/images/iphone.jpg")}  />
                        </div>
                    </div>
                </form>
            </div>

            <div className="submitworkout">
                <div className="container">
                    <button className="orange-btn">Submit Workout</button>
                    <hr />
                </div>
            </div>
        </div>
        )
    }
}