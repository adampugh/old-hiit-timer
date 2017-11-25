import React from "react";

const HomeContent = () => {
    return (
        <div className="container homecontent">
            <h2>Create workouts today for fantasic that are actually really fun.</h2>
            <div className="grid--3to1 homecontent__grid">
                <div className="homecontent__panel">
                    <img src={require("../../../public/images/arm-icon.png")} />
                    <h3>Create Workouts</h3>
                    <p>This is some text that is good but might not be. Don't ask me. Where Black Friday comsumers try to spend and where are those orders coming from.</p>
                </div>
                <div className="homecontent__panel">
                    <img src={require("../../../public/images/dumbbell-icon.png")} />
                    <h3>Customize Workouts</h3>
                    <p>This is some text that is good but might not be. Don't ask me. Where Black Friday comsumers try to spend and where are those orders coming from.</p>
                </div>
                <div className="homecontent__panel">
                    <img src={require("../../../public/images/pencil-icon.png")} />
                    <h3>Edit Workout</h3>
                    <p>This is some text that is good but might not be. Don't ask me. Where Black Friday comsumers try to spend and where are those orders coming from.</p>
                </div>

            </div>
        </div>
    )
}

export default HomeContent;