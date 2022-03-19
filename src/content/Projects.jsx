import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

export default class Projects extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.fetchWorks();
  }
  fetchWorks = async () => {
    const response = await fetch(
      "https://docsploit-profile.herokuapp.com/api/projects"
    );
    const result = await response.json();
    if (result.status === "success") {
      this.setState({ ...this.state, data: result.data });
    }
  };
  render() {
    if (this.state.data.length > 0) {
      return (
        <div className="row">
          {this.state.data.map((t) => {
            return (
              <div
                key={t.projectName}
                className="col-md-12 mx-auto my-2 works-card card"
              >
                <h6 className="mt-3 text-left">{t.projectName}</h6>
                <p>{t.desc}</p>
                <h6 style={{ textAlign: "right", fontSize: "small" }}>
                  Technologies
                </h6>
                <div className="works-card-tech">
                  <p style={{ textAlign: "right" }}>{t.technologies}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="m-auto text-center text-white">
          <Spinner animation="border" />
        </div>
      );
    }
  }
}
