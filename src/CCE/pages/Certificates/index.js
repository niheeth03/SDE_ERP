import './style.css'
import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

class App extends Component {
  certificateWrapper = React.createRef();
  state = {
    StudentName: "",
    CourseName:"",
    InstructorName:""
  };
  render() {
    return (
      <div className="App">
        <div className="Meta">
          <h1>Generate Certificate</h1>
          <p>Name of Student</p>
          <input
            type="text"
            value={this.state.StudentName}
            onChange={(e) => {
              this.setState({ StudentName: e.target.value });
            }}
          />
          <p>Course name</p>
          <input
            type="text"
            value={this.state.CourseName}
            onChange={(e) => {
              this.setState({ CourseName: e.target.value });
            }}
          />
          <p>Name of Instructor</p>
          <input
            type="text"
            value={this.state.InstructorName}
            onChange={(e) => {
              this.setState({ InstructorName: e.target.value });
            }}
          />
          <br/>
          <span></span>
          <button type="submit" class="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(this.certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null }
              });
            }}
          >
            Download
          </button>
        </div>

        <div classname="wrap" id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrapper">
            <p className="students">{this.state.StudentName}</p>
            <p className="courses">{this.state.CourseName}</p>
            <p className="instructors">{this.state.InstructorName}</p>
            <img src="https://i.imgur.com/IcLFgMNh.png?1" alt="TRY AGAIN" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;