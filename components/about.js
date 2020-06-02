import React from 'react';

export default function About() {
  return (
    <>
      <section id="about" className="container">
        <div className="row">
          <div className="column">
            <h3>about the disease</h3>
            <h1>Corona Virus Covid 19</h1>
            <p>
              COVID-19 is a new illness that can affect your longs and airways.
              It is caused by a virus called coronavirus. It was discovered in
              Devember 2019 in Wuhan, Hubei, China.
            </p>
            <ul className="about-list">
              <li>
                <span></span>Covid-19 is the disease caused by the new
                coronavirus that emerged in China in December 2020
              </li>
              <li>
                <span></span>COVID-19 symptoms included cough, fever and
                shortness of breath. COVID-19 can be severe, and some cases have
                caused death.
              </li>
              <li>
                <span></span>The new coronavirus can be spread from person to
                person. It is diagnosed with a laboratory test.
              </li>
            </ul>
          </div>
          <div className="column">
            <div className="img">
              <h1>Image</h1>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
    </>
  );
}
