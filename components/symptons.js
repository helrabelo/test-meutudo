import React from 'react';
import Link from 'next/link';
import SectionHeader from '../components/section-header';

export default function Symptobs() {
  return (
    <>
      <section id="symptons">
        <div className="container">
          <SectionHeader
            span="symptoms"
            title="Corona Virus Symptonms"
            subtitle="COVID-19 is a new illness that can affect your lungs and airwys. It is caused by a virus called coronavirus. It was discovered in December 2019 in Wuhan, China"
          />
          <div className="row">
            <div className="column">
              <div className="symptom-item">
                <div className="symptom-img image">
                  <span></span>
                </div>
                <div className="symptom-content">
                  <h3>High Fever</h3>
                  <p>
                    It is a common sign and also may appear in 2-10 days if you
                    affected.
                  </p>
                </div>
              </div>
              <div className="symptom-item">
                <div className="symptom-img image">
                  <span></span>
                </div>
                <div className="symptom-content">
                  <h3>Coughing And Sneezing</h3>
                  <p>
                    It is a common sign and also may appear in 2-10 days if you
                    affected.
                  </p>
                </div>
              </div>
              <div className="symptom-item">
                <div className="symptom-img image">
                  <span></span>
                </div>
                <div className="symptom-content">
                  <h3>Shortness Of Breath</h3>
                  <p>
                    It is a common sign and also may appear in 2-10 days if you
                    affected.
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="symptons-img image">
                <span></span>
              </div>
              <Link href="#">
                <a className="button">How to Protect Yourself</a>
              </Link>
            </div>
            <div className="column">
              <div className="symptom-item">
                <div className="symptom-img image">
                  <span></span>
                </div>
                <div className="symptom-content">
                  <h3>Strong Headache</h3>
                  <p>
                    It is a common sign and also may appear in 2-10 days if you
                    affected.
                  </p>
                </div>
              </div>
              <div className="symptom-item">
                <div className="symptom-img image">
                  <span></span>
                </div>
                <div className="symptom-content">
                  <h3>Nausea and Vomiting</h3>
                  <p>
                    It is a common sign and also may appear in 2-10 days if you
                    affected.
                  </p>
                </div>
              </div>
              <div className="symptom-item">
                <div className="symptom-img image">
                  <span></span>
                </div>
                <div className="symptom-content">
                  <h3>Confusion</h3>
                  <p>
                    It is a common sign and also may appear in 2-10 days if you
                    affected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
