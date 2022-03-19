import React from "react";

export default class SkillBadge extends React.Component {
  render() {
    return (
      <span
        className="skill-badge "
        style={{
          borderColor: this.props.borderColor,
          backgroundColor: this.props.color,
        }}
      >
        {this.props.title}
      </span>
    );
  }
}
