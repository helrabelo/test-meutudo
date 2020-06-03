import React from 'react';
import SectionHeader from '../components/section-header';
export default function Dodont() {
  return (
    <>
      <section id="dodont" className="container">
        <SectionHeader
          span="do and don't"
          title="what sould you do and avoid"
          subtitle="COVID-19 is a new illness that can affect your lungs and airwys. It is caused by a virus called coronavirus. It was discovered in December 2019 in Wuhan, China"
        />
        <div className="dodonts row">
          <div className="do column">
            <span>What should you do</span>
            <div className="dodont-item">
              <div className="dodont-img image">
                <span></span>
              </div>
              <div className="dodont-content">
                <h3>Wash your hands sanitizer</h3>
                <p>
                  It is a common sign and also may appear in 2-10 days if you
                  affected.
                </p>
              </div>
            </div>
            <div className="dodont-item">
              <div className="dodont-img image">
                <span></span>
              </div>
              <div className="dodont-content">
                <h3>Use Face mask in outdoor</h3>
                <p>
                  It is a common sign and also may appear in 2-10 days if you
                  affected.
                </p>
              </div>
            </div>
            <div className="dodont-item">
              <div className="dodont-img image">
                <span></span>
              </div>
              <div className="dodont-content">
                <h3>Drink much water</h3>
                <p>
                  It is a common sign and also may appear in 2-10 days if you
                  affected.
                </p>
              </div>
            </div>
            <div className="dodont-item">
              <div className="dodont-img image">
                <span></span>
              </div>
              <div className="dodont-content">
                <h3>Practice respiratory hygiene</h3>
                <p>
                  It is a common sign and also may appear in 2-10 days if you
                  affected.
                </p>
              </div>
            </div>
          </div>
          <div className="dont column">
            <span>What you should not do</span>
            <div className="dodont-item">
              <div className="dodont-img image">
                <span></span>
              </div>
              <div className="dodont-content">
                <h3>Avoid contact with sick people</h3>
                <p>
                  It is a common sign and also may appear in 2-10 days if you
                  affected.
                </p>
              </div>
            </div>
            <div className="dodont-item">
              <div className="dodont-img image">
                <span></span>
              </div>
              <div className="dodont-content">
                <h3>Use Face mask in outdoor</h3>
                <p>
                  It is a common sign and also may appear in 2-10 days if you
                  affected.
                </p>
              </div>
            </div>
            <div className="dodont-item">
              <div className="dodont-img image">
                <span></span>
              </div>
              <div className="dodont-content">
                <h3>Drink much water</h3>
                <p>
                  It is a common sign and also may appear in 2-10 days if you
                  affected.
                </p>
              </div>
            </div>
            <div className="dodont-item">
              <div className="dodont-img image">
                <span></span>
              </div>
              <div className="dodont-content">
                <h3>Practice respiratory hygiene</h3>
                <p>
                  It is a common sign and also may appear in 2-10 days if you
                  affected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
