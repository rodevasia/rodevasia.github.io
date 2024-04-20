import React from "react";
import {
  fetchExperience,
  fetchSkills,
  fetchWorks,
} from "../content/connection/index";

function Resume() {
  const [exp, setExp] = React.useState([]);
  const [works, setWorks] = React.useState([]);
  const [skills, setSkills] = React.useState([]);
  React.useEffect(() => {
    fetchExperience(setExp);
    fetchWorks(setWorks);
    fetchSkills(setSkills);
  }, []);

  return (
    <main className="container position-relative bg-light rounded py-5 d-flex flex-column px-5">
      <h1 className="fw-bold text-center">Robert Devasia</h1>

      <section>
        <h3 className="fw-light fs-5 text-center">
          Software Engineer | 3 Years of Experience
        </h3>

        <div className="row mt-5 pt-2 justify-content-center">
          <div className="col-4">
            <p className="fw-500 fs-5 border-bottom pb-3">EXPERIENCE</p>
            {exp
              .sort((a, b) => {
                if (a.endYear === b.endYear) {
                  // If end years are equal, sort by end months
                  return (
                    convertMonthToNumber(a.endMonth) -
                    convertMonthToNumber(b.endMonth)
                  );
                } else {
                  // Otherwise, sort by end years
                  return a.endYear - b.endYear;
                }
              })
              .reverse()
              .map((item) => {
                return (
                  <div
                    key={item.id}
                    className="py-3 rounded card col-12 px-3 shadow my-3"
                  >
                    <p className="m-0 p-0 fw-bold  card-title">
                      {item.jobTitle}
                    </p>
                    <p className="m-0 p-0 small">
                      {item.startMonth} {item.startYear}&nbsp;-&nbsp;
                      {item.endMonth} {item.endYear}
                    </p>
                    <p className="text-gray">{item.company}</p>
                  </div>
                );
              })}
          </div>
          <div className="col-4">
            <p className="fw-500 fs-5 border-bottom pb-3">PROJECTS</p>
            {works
              .sort((a, b) => a.priority - b.priority)
              .map((item) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      window.open(item.link, "_blank").focus();
                    }}
                    className="py-3  rounded card pointer col-12 px-3 shadow my-3"
                  >
                    <p className="m-0 p-0 fw-bold  card-title">
                      {item.projectName}
                    </p>
                    <p className="m-0 p-0 small">{item.technologies}</p>
                    <p className="text-gray small">{item.desc}</p>
                  </div>
                );
              })}
          </div>
          <div className="col-4">
            <p className="fw-500 fs-5 border-bottom pb-3">EXPERTISE</p>
            <div className="py-3 rounded card pointer col-12 px-3 shadow my-3">
              <p className="m-0 p-0 fw-bold  card-title">Language</p>
              <p className="m-0 p-0  text-gray ">
                {skills
                  .filter((item) => item.type === "Language")
                  .map((item) => {
                    return " " + item.title;
                  })
                  .join(",")}
              </p>
            </div>
            <div className="py-3 rounded card pointer col-12 px-3 shadow my-3">
              <p className="m-0 p-0 fw-bold  card-title">Dev Stack</p>
              <p className="m-0 p-0 text-gray">
                {skills
                  .filter((item) => item.type === "Dev Stack")
                  .map((item) => {
                    return " " + item.title;
                  })
                  .join(",")}
              </p>
            </div>
            <div className="py-3 rounded card pointer col-12 px-3 shadow my-3">
              <p className="m-0 p-0  fw-bold card-title">Data Analysis</p>
              <p className="m-0 p-0  text-gray">
                {skills
                  .filter((item) => item.type === "Data Analysis")
                  .map((item) => {
                    return " " + item.title;
                  })
                  .join(",")}
              </p>
            </div>
            <p className="fw-500 fs-5 border-bottom pb-3">OTHER PROFILES</p>
            <div
              onClick={() => {
                window.open("//github.com/rodevasia", "_blank").focus();
              }}
              className="py-3 rounded card pointer col-12 px-3 shadow my-3"
            >
              <p className="m-0 p-0 fw-bold  card-title">Github</p>
            </div>
            <div
              onClick={() => {
                window
                  .open("//linkedin.com/in/robertdevasia", "_blank")
                  .focus();
              }}
              className="py-3 rounded card pointer col-12 px-3 shadow my-3"
            >
              <p className="m-0 p-0 fw-bold  card-title">LinkedIn</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Resume;

function convertMonthToNumber(month) {
  // Define a mapping of month abbreviations to their respective numbers
  const monthMap = {
    JAN: 1,
    FEB: 2,
    MAR: 3,
    APR: 4,
    MAY: 5,
    JUN: 6,
    JUL: 7,
    AUG: 8,
    SEP: 9,
    OCT: 10,
    NOV: 11,
    DEC: 12,
  };
  // Return the corresponding number for the given month abbreviation
  return monthMap[month];
}
