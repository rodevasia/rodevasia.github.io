import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import SkillBadge from "../components/SkillBadge";

export default class Technologies extends Component {
  state = {
    data: [],
  };

  async fetchData() {
    const response = await fetch(
      "https://docsploit-profile.herokuapp.com/api/skills"
    );
    const data = await response.json();
    if (data.status === "success") {
      let s = [];
      for (let i = 0; i < data.data.length; i += 3) {
        const chunk = data.data.slice(i, i + 3);
        s.push(chunk);
      }
      this.setState({ ...this.state, data: s });
    }
  }

  componentDidMount() {
    this.fetchData();
  }
  render() {
    if (this.state.data.length > 0) {
      return (
        <>
          {this.state.data.map((t, i) => {
            return (
              <div key={i} className="py-2 col-md-12">
                {t.map((i, ind) => {
                  return (
                    <SkillBadge
                      key={ind}
                      title={i.title}
                      color={i.color}
                      borderColor={i.bColor}
                    />
                  );
                })}
              </div>
            );
          })}
        </>
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
