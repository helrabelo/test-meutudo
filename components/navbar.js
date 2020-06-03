import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="container navbar-wrapper row">
          <div className="navbar-logo">
            <h1>logo</h1>
          </div>
          <nav className="navbar-links">
            <Link href="#">
              <a>Home</a>
            </Link>
            <Link href="#">
              <a>About Corona</a>
            </Link>
            <Link href="#">
              <a>Symptons</a>
            </Link>
            <Link href="#">
              <a>Prevention</a>
            </Link>
            <Link href="#">
              <a>FAQ</a>
            </Link>
            <Link href="#">
              <a>News</a>
            </Link>
          </nav>
          <Link href="">
            <a className="button">Prevention</a>
          </Link>
        </div>
      </div>
    </>
  );
}
