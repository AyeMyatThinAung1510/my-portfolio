import React from "react";
import Progress from "react-progressbar";
import { skillData } from "../static/data/skillSet";
import _ from "lodash";

const AboutMe = () => (
  <>
    <div id="aboutme">
      <h1>About Me</h1>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
      adipisci alias maxime, ducimus minus minima enim sapiente tempora
      explicabo vero neque natus blanditiis aut quod molestias consectetur esse
      id incidunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quisquam adipisci alias maxime, ducimus minus minima enim sapiente tempora
      explicabo vero neque natus blanditiis aut quod molestias consectetur esse
      id incidunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quisquam adipisci alias maxime, ducimus minus minima enim sapiente tempora
      explicabo vero neque natus blanditiis aut quod molestias consectetur esse
      id incidunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quisquam adipisci alias maxime, ducimus minus minima enim sapiente tempora
      explicabo vero neque natus blanditiis aut quod molestias consectetur esse
      id incidunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quisquam adipisci alias maxime, ducimus minus minima enim sapiente tempora
      explicabo vero neque natus blanditiis aut quod molestias consectetur esse
      id incidunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quisquam adipisci alias maxime, ducimus minus minima enim sapiente tempora
      explicabo vero neque natus blanditiis aut quod molestias consectetur esse
      id incidunt.
      <div>
        <h4>+ Education </h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          adipisci alias maxime, ducimus minus minima enim sapiente tempora
          explicabo vero neque natus blanditiis aut quod molestias consectetur
          esse id incidunt. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Quisquam adipisci alias maxime, ducimus minus minima enim
          sapiente tempora explicabo vero neque natus blanditiis aut quod
          molestias consectetur esse id incidunt.
        </p>
        <h4>+ Working Experience </h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          adipisci alias maxime, ducimus minus minima enim sapiente tempora
          explicabo vero neque natus blanditiis aut quod molestias consectetur
          esse id incidunt. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Quisquam adipisci alias maxime, ducimus minus minima enim
          sapiente tempora explicabo vero neque natus blanditiis aut quod
          molestias consectetur esse id incidunt.
        </p>

        <h4>+ Skills </h4>
        <div className="skill-container">
          {_.map(skillData, s => (
            <>
              <div className="my-2" key={s.id}>
                <span>
                  {s.title}
                  <Progress completed={s.completed} />
                </span>
              </div>
            </>
          ))}
        </div>
        <h4>+ Interests </h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          adipisci alias maxime, ducimus minus minima enim sapiente tempora
          explicabo vero neque natus blanditiis aut quod molestias consectetur
        </p>
        <h4>+ References </h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          adipisci alias maxime, ducimus minus minima enim sapiente tempora
          explicabo vero neque natus blanditiis aut quod molestias consectetur
        </p>
      </div>
    </div>
  </>
);

export default AboutMe;
