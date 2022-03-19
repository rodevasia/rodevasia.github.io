import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

export default class WeeklyProgress extends Component {
  state = {
    progressBars: [],
  };
  componentDidMount() {
    this.fetchProgress();
  }
  fetchProgress = async () => {
    const colors = await (
      await fetch(
        "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
      )
    ).json();
    const progress = await (
      await fetch("https://dcwaka.herokuapp.com/")
    ).json();
    const bars = [];
    for (let i = 0; i < progress.length; i++) {
      const lang = progress[i];
      if (colors[lang.name]) {
        const bar = {
          color: colors[lang.name].color,
          language: lang.name,
          percent: lang.percent,
          time: lang.text,
        };
        bars.push(bar);
      }
      this.setState({ ...this.state, progressBars: bars });
    }
  };

  render() {
    if (this.state.progressBars.length > 0) {
      return (
        <div className="progress">
          {this.state.progressBars.map((t) => {
            return (
              <div
                key={t.language}
                className="progress-bar  progress-bar-animated"
                role="progressbar"
                title={t.time}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  width: `${t.percent}%`,
                  backgroundColor: t.color,
                }}
              >
                <span style={{ color: "black", mixBlendMode: "darken" }}>
                  {t.language}
                </span>
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
