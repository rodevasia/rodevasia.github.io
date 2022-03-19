import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="works col-10 m-auto">
          <h6>Contact Information</h6>
          <div className="row">
            <div className="col-md-3 m-auto works-card card p-3">
              <div className="row loby col-11">
                <div className="col-6">Country:</div>
                <div
                  className="col-6"
                  style={{
                    color: "var(--explained)",
                    textAlign: "right",
                    fontWeight: 500,
                  }}
                >
                  India
                </div>
              </div>
              <div className="row loby col-11">
                <div className="col-6">State:</div>
                <div
                  className="col-6"
                  style={{
                    color: "var(--explained)",
                    textAlign: "right",
                    fontWeight: 500,
                  }}
                >
                  Kerala
                </div>
              </div>
              <div className="row loby col-11">
                <div className="col-6">District:</div>
                <div
                  className="col-6"
                  style={{
                    color: "var(--explained)",
                    textAlign: "right",
                    fontWeight: 500,
                  }}
                >
                  Calicut
                </div>
              </div>
            </div>
            <div className="col-md-5 m-auto works-card card p-3">
              <div className="row loby col-11">
                <div style={{ fontSize: "smaller" }} className="col-3">
                  Email:
                </div>
                <div
                  className="col-9"
                  style={{
                    fontSize: "small !important",
                    color: "var(--explained)",
                    textAlign: "right",
                    fontWeight: 500,
                  }}
                >
                  robertdevasia@outlook.com
                </div>
              </div>
              <div className="row loby col-11">
                <div className="col-6">Telegram:</div>
                <div
                  className="col-6"
                  style={{
                    color: "var(--explained)",
                    textAlign: "right",
                    fontWeight: 500,
                  }}
                >
                  @docsploit
                </div>
              </div>
              <div className="row loby col-11">
                <div className="col-6">Github:</div>
                <div
                  className="col-6"
                  style={{
                    color: "var(--explained)",
                    textAlign: "right",
                    fontWeight: 500,
                  }}
                >
                  @docsploit
                </div>
              </div>
            </div>
            <div className="col-md-3 m-auto works-card card p-3">
              <div className="loby col-11">
                <div className="col-12">Support Numbers:</div>
                <div
                  className="col-12"
                  style={{
                    color: "var(--explained)",
                    textAlign: "right",
                    fontWeight: 500,
                  }}
                >
                  +91&nbsp;80&nbsp;7828&nbsp;0829
                </div>
                <div
                  className="col-12"
                  style={{
                    color: "var(--explained)",
                    textAlign: "right",
                    fontWeight: 500,
                  }}
                >
                  +91&nbsp;73&nbsp;0621&nbsp;4265
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 col-12 m-auto footerbar">
          <p style={{ textAlign: "left" }} className="foo-copy mt-3 col-6"></p>
          <p className="foo-copy mt-3 col-6 mr-auto">
            <i
              style={{ cursor: "pointer" }}
              onClick={() => (window.location = "https://github.com/docsploit")}
              className="col-1 bi bi-github mx-2"
              aria-hidden="true"
            />
            <i
              style={{ cursor: "pointer" }}
              onClick={() =>
                (window.location = "https://www.linkedin.com/in/robertdevasia/")
              }
              className="col-1 bi bi-linkedin mx-2"
              aria-hidden="true"
            />
            <i
              style={{ cursor: "pointer" }}
              onClick={() =>
                (window.location =
                  "https://stackoverflow.com/users/9547679/robert-devasia")
              }
              className="col-1 bi bi-stack-overflow mx-2"
              aria-hidden="true"
            />
          </p>
        </div>
      </>
    );
  }
}
