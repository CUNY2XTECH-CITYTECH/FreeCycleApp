import React from 'react';
import Image from 'next/image'; // For optimized image loading
import Link from 'next/link'; // For client-side navigation
import './home.css';

export default function HomePage() {
  return (
    <>
      <header>
        <div className="wrapper">
          <nav className="nav-main">
            <ul>
              <li>
                <Link href="#Home">Home</Link>
              </li>
              <li>
                <Link href="#Cart">
                  <button>
                    <Image src="/shopping-cart.png" width={25} height={25} alt="Cart" />
                  </button>
                </Link>
              </li>
              <li>
                <Link href="#login-form">
                  <button className="login-b">Login</button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container">
        <div className="slideshow-container">
          <div className="mySlides fade">
            <Image src="/slide1.jpg" width={1920} height={500} alt="Slide 1" />
          </div>
          <div className="mySlides fade">
            <Image src="/slide2.jpg" width={1920} height={500} alt="Slide 2" />
          </div>
          <div className="mySlides fade">
            <Image src="/slide3.jpg" width={1920} height={500} alt="Slide 3" />
          </div>

        </div>
      </div>

      {/* <script src="/home.js"></script> */}
    </>
  );
}