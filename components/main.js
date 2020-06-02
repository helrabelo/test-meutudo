import React from 'react';
import Link from 'next/link';
export default function Main() {
  return (
    <>
      <main>
        <div className="container">
          <h1>Corona Covid-19 Virus</h1>
          <p>
            The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China
            in December 2019, the outbreak was later recognized as a pandemic
            bby the World Health Organization (HWO) on 11 March 2020
          </p>
          <Link href="#">
            <a>How to Protect</a>
          </Link>
        </div>
      </main>
    </>
  );
}
