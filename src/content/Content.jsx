import React, { Component } from "react";
import Experience from "./Experience";
import Footer from "./Footer";
import Projects from "./Projects";
import WeeklyProgress from "./WeeklyProgress";

export default class Content extends Component {
  componentDidMount() {
    this.rollText();
  }
  rollText() {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  }

  render() {
    return (
      <div className="body-content">
        <div className="intro-card col-10">
          <h3>
            Hello'<span className="wave">&nbsp;&nbsp;&nbsp;👋</span>
          </h3>
          <h3>Explore My Amazing Works!</h3>
          <div id="typew">
            <code>
              I
              <span
                className="txt-rotate"
                data-period="2000"
                data-rotate='[ " develop  web applications.", " build android and ios applications.", " build design mockups", " contributes to KDE as hobby.", " love coding!🧑‍💻" ]'
              ></span>
            </code>
          </div>
        </div>
        <div className="col-10 m-auto works">
          <h6>Weekly Progress</h6>
          <WeeklyProgress />
        </div>
        <div className="col-10 m-auto works">
          <h6>My Works</h6>
          <Projects />
        </div>
        <div className="works col-10 m-auto">
          <h6>Experience</h6>
          <Experience />
        </div>
        <Footer />
      </div>
    );
  }
}

class TxtRotate {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  }
  tick() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 75 - Math.random() * 100;

    if (this.isDeleting) {
      delta = 0;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 200;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  }
}
