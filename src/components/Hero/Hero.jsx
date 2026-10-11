import { useEffect, useState } from "react";

import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

import "./Hero.css";

const slides = [
  {
    id: 1,
    image: "images/hero/hero-1.jpg",
    alt: "Beautiful natural landscape surrounded by mountains",
    eyebrow: "WELCOME TO MAMTA HOMESTAY",
    title: "Your Home",
    titleAccent: "in the Hills.",
    description:
      "A peaceful escape from the everyday, where warm hospitality meets the beauty of the mountains.",
  },
  {
    id: 2,
    image: "images/hero/hero-2.png",
    alt: "A peaceful retreat surrounded by greenery",
    eyebrow: "SLOW DOWN. BREATHE. UNWIND.",
    title: "Find Your",
    titleAccent: "Quiet Escape.",
    description:
      "Wake up to beautiful surroundings and make space for the moments that matter.",
  },
  {
    id: 3,
    image: "images/hero/hero-3.png",
    alt: "A cosy wooden mountain retreat",
    eyebrow: "STAY A LITTLE CLOSER TO NATURE",
    title: "Feel at Home,",
    titleAccent: "Away from Home.",
    description:
      "Discover the comfort of a welcoming stay and the simple beauty of life in the hills.",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = slides[activeSlide];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => {
        return (current + 1) % slides.length;
      });
    }, 6000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const previousSlide = () => {
    setActiveSlide((current) => {
      return (current - 1 + slides.length) % slides.length;
    });
  };

  const nextSlide = () => {
    setActiveSlide((current) => {
      return (current + 1) % slides.length;
    });
  };

  return (
    <section
      className="hero"
      id="home"
      aria-label="Mamta Homestay introduction"
    >
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${
              index === activeSlide ? "hero-slide-active" : ""
            }`}
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
            role="img"
            aria-label={slide.alt}
            aria-hidden={index !== activeSlide}
          />
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="hero-container">
        <div className="hero-content" key={currentSlide.id}>
          <span className="hero-eyebrow">
            <span className="hero-eyebrow-line" />

            {currentSlide.eyebrow}
          </span>

          <h1 className="hero-title">
            {currentSlide.title}

            <br />

            <span>{currentSlide.titleAccent}</span>
          </h1>

          <p className="hero-description">{currentSlide.description}</p>

          <div className="hero-actions">
            <a href="#contact" className="hero-primary-button">
              Plan Your Stay
              <ArrowRight size={17} />
            </a>

            <a href="#about" className="hero-secondary-button">
              Discover Our Story
            </a>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <a
          href="#about"
          className="hero-scroll"
          aria-label="Scroll to learn about Mamta Homestay"
        >
          <ArrowDown size={17} />

          <span>SCROLL TO EXPLORE</span>
        </a>

        <div className="hero-controls">
          <span className="hero-slide-count">
            {String(activeSlide + 1).padStart(2, "0")}
          </span>

          <div className="hero-indicators">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`hero-indicator ${
                  index === activeSlide ? "hero-indicator-active" : ""
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={index === activeSlide}
              />
            ))}
          </div>

          <span className="hero-slide-total">
            {String(slides.length).padStart(2, "0")}
          </span>

          <button
            type="button"
            className="hero-arrow"
            onClick={previousSlide}
            aria-label="Previous slide"
          >
            <ArrowLeft size={19} />
          </button>

          <button
            type="button"
            className="hero-arrow"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
