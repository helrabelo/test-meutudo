import React from 'react';
import Link from 'next/link';

export default function Symptobs() {
  return (
    <>
      <section id="symptons">
        <div className="container row">
          <div className="column">
            <div className="symptom-item">
              <div className="symptom-img">
                <h1>Image</h1>
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
              <div className="symptom-img">
                <h1>Image</h1>
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
              <div className="symptom-img">
                <h1>Image</h1>
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
            <div className="symptons-img">
              <h1>Image</h1>
            </div>
            <Link href="#">
              <a>How to Protect Yourself</a>
            </Link>
          </div>
          <div className="column">
            <div className="symptom-item">
              <div className="symptom-img">
                <h1>Image</h1>
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
              <div className="symptom-img">
                <h1>Image</h1>
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
              <div className="symptom-img">
                <h1>Image</h1>
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
      </section>
      <hr />
    </>
  );
}
