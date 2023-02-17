import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import SkillBadge from "../components/SkillBadge";
import { fetchSkills } from "../content/connection";

export default class Technologies extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetchSkills().then((skills) => {
      let s = [];
      for (let i = 0; i < skills.length; i += 3) {
        const chunk = skills.slice(i, i + 3);
        s.push(chunk);
      }
      this.setState({ ...this.state, data: s });
    });
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
