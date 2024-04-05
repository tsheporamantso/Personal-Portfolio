import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => (
  <section id="experience">
    <h5>Skills I have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill />
            <div>
              <h4>HTML5</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill />
            <div>
              <h4>CSS3</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill />
            <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill />
            <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill />
            <div>
              <h4>React/Redux</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
        </div>
      </div>

      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill />
            <div>
              <h4>Ruby</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill />
            <div>
              <h4>Ruby on Rails</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill />
            <div>
              <h4>PostgreSQL</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill />
            <div>
              <h4>CLI</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
