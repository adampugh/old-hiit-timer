import React from "react";

// gut this
export default class StartWorkoutContent extends React.Component {
    render() {
        return (
            <div className="startworkout">
                <div className="container">
                    <div className="row">
                    <h1>Jumping Jacks</h1>
                    <h1>00:04:32</h1>
                    <i className="fa fa-pause-circle-o" aria-hidden="true"></i>

                    <div className="grid--3to1">
                        <div className="startworkout__panel time-elapsed">
                            <h3>Time Elapsed</h3>
                            <h3>00:06:50</h3>
                        </div>
                        <div className="startworkout__panel exercises-left">
                            <h3>Exercises Left</h3>
                            <h3>2/8</h3>
                        </div>
                        <div className="startworkout__panel time-left">
                            <h3>Time Left</h3>
                            <h3>00:06:50</h3>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}