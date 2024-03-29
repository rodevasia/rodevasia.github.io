import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import { fetchWorks } from "./connection";

export default class Projects extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    fetchWorks().then((works) => this.setState({ ...this.state, data: works }));
  }

  render() {
    if (this.state.data.length > 0) {
      return (
        <div className="row">
          {this.state.data.reverse().map((t) => {
            return (
              <div
                key={t.projectName}
                className="col-md-12 mx-auto my-2 works-card card"
              >
                <h6 className="mt-3 text-left">{t.projectName}</h6>
                <p>{t.desc}</p>
                <div className="row text-white">
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noreferrer"
                    className="col-md-6 text-secondary my-auto"
                    style={{ fontSize: "small" }}
                  >
                    <i>{t.link}</i>
                  </a>
                  <div className="col-md-6 text-white">
                    <h6 style={{ textAlign: "right", fontSize: "small" }}>
                      Technologies
                    </h6>
                    <div className="works-card-tech">
                      <p style={{ textAlign: "right" }}>{t.technologies}</p>
                    </div>
                  </div>
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
