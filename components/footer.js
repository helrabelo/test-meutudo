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
                <h3>Logo</h3>
              </div>
              <p>
                This website is for health information and advice about
                coronavírus (COVID-19), how to prevent and protect yourself from
                disease.
              </p>
              <ul className="social-icons">
                <li>
                  <Link href="#">
                    <a className="footer-link">F</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="footer-link">T</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="footer-link">L</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="footer-link">F</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <h3>Important Link</h3>
              <ul className="footer-links">
                <li>
                  <Link href="#">
                    <a className="footer-link">WHO Website</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="footer-link">CDC Website</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="footer-link">NHS Website</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="footer-link">Harvard Health</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <h3>Quick Link</h3>
              <ul className="footer-links">
                <li>
                  <Link href="#">
                    <a className="footer-link">Symptoms</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="footer-link">Prevention</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="footer-link">Protect yourself</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="footer-link">FAQs</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="footer-link">About Corona</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <h3>Helpful Link</h3>
              <ul className="footer-links">
                <li>
                  <Link href="#">
                    <a className="footer-link">Healthcare Professionals</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="footer-link">Healthcare Facilities</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="footer-link">
                      Older Adults and Medical Conditions
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="footer-link">Repare your family</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-rights">
          <div className="container row">
            <p>@2020 E-learning All rights reserved.</p>
            <div className="rights-links">
              <Link href="#">
                <a className="footer-link">Privacy</a>
              </Link>
              <p>|</p>
              <Link href="#">
                <a className="footer-link">Terms Conditions</a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
