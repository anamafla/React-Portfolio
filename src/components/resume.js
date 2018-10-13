import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cf.ltkcdn.net/socialnetworking/images/std/168796-281x281-girl-swear-icon.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ padingTop: "2em" }}>Ana M M</h2>
            <h4 style={{ color: "grey" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              ducimus quae aperiam aliquid. Eius sint eaque nesciunt dolorem
              magnam est voluptate, deserunt laboriosam, ipsum doloremque
              deleniti assumenda neque voluptas nostrum.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-789</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam non cumque placeat voluptatum atque iure!"
            />
            <Education
              startYear={2007}
              endYear={2009}
              schoolName="My 2nd University"
              schoolDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam non cumque placeat voluptatum atque iure!"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam non cumque placeat voluptatum atque iure!"
            />
            <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam non cumque placeat voluptatum atque iure!"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2> Skills </h2>
            <Skills skill="Javascript" progress={100} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="React" progress={60} />
            <Skills skill="NodeJS" progress={20} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default resume;
