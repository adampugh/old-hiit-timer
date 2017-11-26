import React from "react";

export default class ExerciseForm extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="exerciseform grid--2to1">
                    <form>
                        <h3>Exercise</h3>
                        <input type="text" />
                        <h3>Duration</h3>
                        <input type="number" />
                        <h3>Break</h3>
                        <input type="number" />
                        <h3>Colour</h3>
                        <div className="colourboxes">
                            <div className="colourboxes--row1">
                                <div className="colourbox colour-1"></div>
                                <div className="colourbox colour-2"></div>
                                <div className="colourbox colour-3"></div>
                                <div className="colourbox colour-4"></div>
                            </div>

                            <div className="colourboxes--row2">
                                <div className="colourbox colour-5"></div>
                                <div className="colourbox colour-6"></div>
                                <div className="colourbox colour-7"></div>
                                <div className="colourbox colour-8"></div>
                            </div>
                        </div>
                        <h3>Sound</h3>
                        <div>
                            <i className="fa fa-play-circle" aria-hidden="true"></i>
                            <i className="fa fa-play-circle" aria-hidden="true"></i>
                            <i className="fa fa-play-circle" aria-hidden="true"></i>
                        </div>

                        <hr />


                        <div>
                            <button className="orange-btn">
                                Add Exercise
                            </button>
                        </div>
                    </form>

                    <div className="exerciseform__preview">
                        <img src={require("../../../public/images/iphone.jpg")}  />
                    </div>
                </div>
            </div>
        )
    }
}