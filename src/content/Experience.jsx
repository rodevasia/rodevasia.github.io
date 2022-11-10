import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

export default class Experience extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.fetchExperience();
  }
  fetchExperience = async () => {
    const response = await fetch(
      "https://docsploit.onrender.com/api/experience"
    );
    const result = await response.json();
    if (result.status === "success") {
      this.setState({ ...this.state, data: result.data });
    }
  };

  render() {
    if (this.state.data.length > 0) {
      return (
        <div className="timeline">
          <ul>
            {this.state.data.map((t) => {
              return (
                <li key={t.jobTitle}>
                  <div className="content">
                    <h3>{t.jobTitle}</h3>
                    <p>{t.company}</p>
                  </div>
                  <div className="point" />
                  <div className="date">
                    <h4>
                      {t.startMonth}&nbsp;{t.startYear}&nbsp;-
                      {t.startMonth === t.endMonth && t.startYear === t.endYear
                        ? "Present"
                        : `${t.endMonth} ${t.endYear}`}
                    </h4>
                  </div>
                </li>
              );
            })}
          </ul>
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
