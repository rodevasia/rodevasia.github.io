import React from "react";
import { Col } from "react-bootstrap";
import Technologies from "./Technologies";
import ProfilePic from "../assets/profile.jpg";
import { CircularProgressbar } from "react-circular-progressbar";
export default class Sidebar extends React.Component {
  state = {
    age: null,
    active: true,
    bottom: false,
    screen: { height: window.innerHeight, width: window.innerWidth },
  };
  messagesEnd;
  messagesStart;
  componentDidMount() {
    this.getMyAge();
    this.getScreenHieghWidth();
  }
  getMyAge() {
    let year = new Date();
    let myDob = new Date();
    myDob.setFullYear(2000, 1, 28);
    const psuedo = new Date(year.getTime() - myDob.getTime());
    const myYear = psuedo.getUTCFullYear();
    const age = myYear - 1970;
    this.setState({ ...this.state, age });
  }
  getScreenHieghWidth() {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
        this.setState({ ...this.state, active: false });
      } else {
        this.setState({ ...this.state, active: true });
      }
    });
  }
  handleToggle = (value) => {
    if (value === true) {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    if (value === false) {
      this.messagesStart.scrollIntoView({ behavior: "smooth" });
    }
    this.setState((prevState) => ({
      ...prevState,
      bottom: !this.state.bottom,
    }));
  };
  render() {
    return (
      <>
        <aside
          style={{ marginLeft: this.state.active ? "0px" : "-250px" }}
          id="side"
          className="sider-container"
        >
          <div className="sider-card">
            <a onClick={() => this.handleToggle(!this.state.bottom)}>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M22.0002 11.9999C22.0002 17.5149 17.5142 21.9999 12.0002 21.9999C6.48624 21.9999 2.00024 17.5149 2.00024 11.9999C2.00024 6.4859 6.48624 1.9999 12.0002 1.9999C17.5142 1.9999 22.0002 6.4859 22.0002 11.9999Z"
                  fill="#585858"
                />
                <path
                  d="M16.2209 10.5575C16.2209 10.7485 16.1479 10.9405 16.0019 11.0865L12.5319 14.5735C12.3909 14.7145 12.1999 14.7935 11.9999 14.7935C11.8009 14.7935 11.6099 14.7145 11.4689 14.5735L7.99695 11.0865C7.70495 10.7935 7.70495 10.3195 7.99895 10.0265C8.29295 9.7345 8.76795 9.7355 9.05995 10.0285L11.9999 12.9815L14.9399 10.0285C15.2319 9.7355 15.7059 9.7345 15.9999 10.0265C16.1479 10.1725 16.2209 10.3655 16.2209 10.5575Z"
                  fill="#fafafc"
                />
              </svg>
            </a>
            <div className="profile">
              <img alt="profile" src={ProfilePic} height="100%" width="100%" />
            </div>
            <h5 className="profile-name">Robert Devasia</h5>
            <p className="carrote">~Developer</p>
          </div>
          <div ref={(e) => (this.messagesStart = e)}></div>
          <div style={{ marginTop: 220 }}>
            <div className="wr-content">
              <div className="native">
                <p>Country:</p>
                <p>India</p>
              </div>
              <div className="native">
                <p>City:</p>
                <p>Kozhikode</p>
              </div>
              <div className="native">
                <p>Age:</p>
                <p>{this.state.age}</p>
              </div>
            </div>
            <div className="wr-content flex-board py-3">
              <div className="col-md-3 m-auto">
                <CircularProgressbar
                  value={90}
                  text={`English`}
                  strokeWidth={3}
                  styles={{ text: { fill: "white" } }}
                />
              </div>
              <div className="col-md-3 m-auto">
                <CircularProgressbar
                  value={100}
                  text={`Malayalam`}
                  strokeWidth={3}
                  styles={{ text: { fill: "white", fontSize: 14 } }}
                />
              </div>
            </div>
            <div className="wr-content">
              <h6 className="wr-content-title pt-3">TECHNOLOGIES KNOWN</h6>
              <Col className="mt-3">
                <Technologies />
              </Col>
            </div>
            <div className="wr-content">
              <div style={{ margin: "auto", paddingTop: 15 }}>
                <h6 className="wr-content-title">OTHER THINGS I KNOW</h6>
                <ul className="kn">
                  <li>Github</li>
                  <li>Boostrap</li>
                  <li>Tailwind</li>
                  <li>Figma</li>
                  <li>Firebase</li>
                  <li>Heroku</li>
                  <li>Ant Design</li>
                  <li>Material UI</li>
                  <li>AWS Instance</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            style={{ float: "left", clear: "both" }}
            ref={(el) => {
              this.messagesEnd = el;
            }}
          ></div>
        </aside>
        <button
          onClick={() =>
            this.setState({ ...this.state, active: !this.state.active })
          }
          className="sidebarBtn"
        >
          <span></span>
        </button>
      </>
    );
  }
}
