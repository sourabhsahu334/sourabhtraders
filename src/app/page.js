
// pages/index.js
'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import "./globals.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Responsive Personal Portfolio Website</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
      </Head>

      {/* Header Section */}
      <header className="header">
        <div className="user">
          <Image 
            src="/IMG-20220121-WA0001.jpg" 
            alt="Mukesh Sahu" 
            width={100} 
            height={100} 
            className="profile-image" 
          />
          <h3 className="name">Mukesh Sahu</h3>
          <p className="post">Proprietor of Sourabh Traders</p>
        </div>

        <nav className="navbar">
          <ul>
            <li><Link href="#home">home</Link></li>
            <li><Link href="#portfolio">portfolio</Link></li>
            <li><Link href="#contact">contact</Link></li>
            <li><Link href="#about">about us</Link></li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="home">
        <h3>HI THERE!</h3>
        <h1>
          <span>SOURABH TRADERS</span>
        </h1>
        <p>
          I am Mukesh Sahu, Proprietor of Sourabh Traders, Narsinghgarh (M.P.). <br />
          We specialize in garlic, onion, soybean, wheat, and chana. We procure the best quality
          materials from farmers at Narsinghgarh Mandi and export these goods to other states.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h1 className="heading">
          <span>About</span> Us
        </h1>

        <div className="row">
          <div className="info">
            <div className="counter">
              <div className="box">
                <span>15+</span>
                <h3>years of experience in the business</h3>
              </div>
              <div className="box">
                <span>Supply</span>
                <h3>Over thousands of quintals</h3>
                <h3>Best quality material</h3>
              </div>
              <div className="box">
                <span>Turnover</span>
                <h3>Significant yearly growth</h3>
              </div>
              <div className="box">
                <span>Clients</span>
                <h3>Across different states</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <h1 className="heading">
          My <span>Portfolio</span>
        </h1>

        <div className="boxContainer">
          {[1, 2, 3, 4, 5, 6,7,8].map((num) => (
            <div key={num} className="box">
              <Image
                src={`/IMG-20220121-WA000${num + 1}.jpg`}
                alt="Portfolio Image"
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>

        <style jsx>{`
          .header .user {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .header .user .profile-image {
            border-radius: 50%;
            margin-bottom: 10px;
          }

          .boxContainer {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 16px;
          }

          .box {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          @media (min-width: 768px) {
            .boxContainer {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .boxContainer {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h1 className="heading">
          <span>Contact</span> Me
        </h1>

        <div className="row">
          <div className="content">
            <h3 className="title">Contact Info</h3>
            <div className="info">
              <h3>
                <i className="fas fa-envelope"></i> sourabhsahu339@gamil.com
              </h3>
              <h3>
                <i className="fas fa-phone"></i> 9826520564
              </h3>
              <h3>
                <i className="fas fa-phone"></i> 9826520554
              </h3>
              <h3>
                <i className="fas fa-map-marker-alt"></i> Narsinghgarh - M.P. - 465669
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

