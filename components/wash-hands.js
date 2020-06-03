import React from 'react';
import SectionHeader from '../components/section-header';

export default function Washhands() {
  return (
    <>
      <section id="washhands" className="container">
        <SectionHeader
          span="how to wash hands"
          title="how to wash your hands"
          subtitle="COVID-19 is a new illness that can affect your lungs and airwys. It is caused by a virus called coronavirus. It was discovered in December 2019 in Wuhan, China"
        />
        <div className="washhands row">
          <div className="washhands-item">
            <div className="image">
              <span></span>
            </div>
            <p>Wet Hand</p>
          </div>
          <div className="washhands-item">
            <div className="image">
              <span></span>
            </div>
            <p>Apply Soap</p>
          </div>
          <div className="washhands-item">
            <div className="image">
              <span></span>
            </div>
            <p>Rub hand pulp to pulp</p>
          </div>
          <div className="washhands-item">
            <div className="image">
              <span></span>
            </div>
            <p>lather the both hands</p>
          </div>
          <div className="washhands-item">
            <div className="image">
              <span></span>
            </div>
            <p>scrub between your fingers</p>
          </div>
          <div className="washhands-item">
            <div className="image">
              <span></span>
            </div>
            <p>rub the back of the fingers on the opposing palm</p>
          </div>
          <div className="washhands-item">
            <div className="image">
              <span></span>
            </div>
            <p>clean thumbs</p>
          </div>
          <div className="washhands-item">
            <div className="image">
              <span></span>
            </div>
            <p>wash fingernails and fingertips</p>
          </div>
          <div className="washhands-item">
            <div className="image">
              <span></span>
            </div>
            <p></p>
          </div>
          <div className="washhands-item">
            <div className="image">
              <span></span>
            </div>
            <p>rinse hands</p>
          </div>
          <div className="washhands-item">
            <div className="image">
              <span></span>
            </div>
            <p>dry with a single use towel</p>
          </div>
        </div>
        <div className="washhands-item">
          <div className="image">
            <span></span>
          </div>
          <p>Use the towel to turn off the faucet</p>
        </div>
        <div className="washhands-item">
          <div className="image">
            <span></span>
          </div>
          <p>your hands are clean</p>
        </div>
      </section>
      <hr />
    </>
  );
}
