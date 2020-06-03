import React from 'react';
import Link from 'next/link';

export default function Banner() {
  return (
    <>
      <section id="banner" className="container">
        <div className="banner">
          <div className="banner-content">
            <h1>Need to test COVID-19?</h1>
            <p>
              Just make an appointment then we'll come to you to collect your
              sample
            </p>
          </div>
          <div className="banner-cta">
            <Link href="#">
              <a className="button">get appointment</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
