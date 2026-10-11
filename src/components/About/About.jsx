import { ArrowUpRight, Heart } from "lucide-react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left: Image */}
        <div className="about-visual">
          <div className="about-image-main">
            <img
              src="images/hero/hero-1.jpg"
              alt="A peaceful home surrounded by greenery"
              loading="lazy"
            />
          </div>

          <div className="about-image-accent">
            <img
              src="images/hero/hero-1.jpg"
              alt="A quiet and welcoming place to stay"
              loading="lazy"
            />
          </div>

          <div className="about-note">
            <Heart size={17} strokeWidth={1.6} />
            <span>Hospitality from the heart</span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <span className="section-label">A LITTLE ABOUT US</span>

          <h2 className="about-title">
            More than a stay,
            <br />
            <span>a feeling of home.</span>
          </h2>

          <div className="about-divider" />

          <p className="about-intro">
            Welcome to Mamta Homestay, a place designed for you to slow down,
            feel at ease, and make memories worth keeping.
          </p>

          <p className="about-description">
            Whether you're travelling with family, spending time with friends,
            or simply taking a break from your everyday routine, we want your
            stay to feel comfortable, personal, and memorable.
          </p>

          <p className="about-description">
            We believe the best stays aren't just about where you sleep. They're
            about the warmth you experience and the little moments that make a
            journey special.
          </p>

          <a href="#rooms" className="about-link">
            <span>Discover our rooms</span>
            <span className="about-link-icon">
              <ArrowUpRight size={18} />
            </span>
          </a>

          <div className="about-signature">
            <span className="about-signature-line" />
            <span>A warm welcome awaits you</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
