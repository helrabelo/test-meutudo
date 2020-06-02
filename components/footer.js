import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className=" row main-footer">
            <div className="column">
              <div className="footer-logo">
                <h1>Logo</h1>
              </div>
              <p>
                This website is for health information and advice about
                coronavírus (COVID-19), how to prevent and protect yourself from
                disease.
              </p>
              <ul className="social-icons">
                <li>
                  <Link href="#">
                    <a>F</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>T</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>L</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>F</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <h3>Important Link</h3>
              <ul className="footer-links">
                <li>
                  <Link href="#">
                    <a>WHO Website</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>T</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>L</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>F</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <h3>Quick Link</h3>
              <ul className="footer-links">
                <li>
                  <Link href="#">
                    <a>Symptoms</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Prevention</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Protect yourself</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>FAQs</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>About Corona</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <h3>Helpful Link</h3>
              <ul className="footer-links">
                <li>
                  <Link href="#">
                    <a>Healthcare Professionals</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Healthcare Facilities</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Older Adults and Medical Conditions</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Repare your family</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-rights"></div>
          <p>@2020 E-learning All rights reserved.</p>

          <p>
            <Link href="#">
              <a>Privacy</a>
            </Link>
            and
            <Link href="#">
              <a>Terms Conditions</a>
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
