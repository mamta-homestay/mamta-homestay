import { useState } from "react";
import "./Gallery.css";

const galleryImages = [
  {
    id: 1,
    src: "images/gallery/Gallery-1.jpg",
    alt: "Front of Mamta Homestay",
    title: "A Peaceful Escape",
  },
  {
    id: 2,
    src: "images/gallery/Gallery-2.jpg",
    alt: "Bathroom with Bathtub",
    title: "Bathtub Bliss",
  },
  {
    id: 3,
    src: "images/gallery/Gallery-3.jpg",
    alt: "A beautiful night view from the homestay",
    title: "Experience the Night Sky",
  },
  {
    id: 4,
    src: "images/gallery/Gallery-4.jpg",
    alt: "Mountain Sunrise view from the homestay",
    title: "Experience the Morning Light",
  },
  {
    id: 5,
    src: "images/gallery/Gallery-5.jpg",
    alt: "Serene Mountain Valley View",
    title: "Serene Mountain Valley View",
  },
  {
    id: 6,
    src: "images/gallery/Gallery-6.jpg",
    alt: "Another Washroom",
    title: "Another Washroom",
  },
  {
    id: 7,
    src: "images/gallery/Gallery-7.jpg",
    alt: "Kanchenjunga view from the homestay",
    title: "Kanchenjunga view from the homestay",
  },
  {
    id: 8,
    src: "images/gallery/Gallery-8.jpg",
    alt: "Balcony with Valley view",
    title: "Balcony with Valley view",
  },
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1,
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1,
    );
  };

  const getImage = (offset) => {
    return galleryImages[
      (activeIndex + offset + galleryImages.length) % galleryImages.length
    ];
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        {/* Section Heading */}
        <div className="gallery-heading">
          <span className="gallery-eyebrow">A GLIMPSE OF YOUR STAY</span>

          <h2>
            Moments at <span>Mamta Homestay</span>
          </h2>

          <p>
            Discover the spaces, surroundings, and little details that make your
            stay special.
          </p>
        </div>

        {/* Carousel */}
        <div className="gallery-carousel">
          <button
            className="gallery-arrow gallery-arrow-left"
            onClick={previousSlide}
            aria-label="View previous photos"
            type="button"
          >
            &#8592;
          </button>

          <div className="gallery-track">
            {/* Previous Image */}
            <article className="gallery-card gallery-card-side gallery-card-left">
              <img src={getImage(-1).src} alt={getImage(-1).alt} />

              <div className="gallery-card-overlay">
                <h3>{getImage(-1).title}</h3>
              </div>
            </article>

            {/* Active Image */}
            <article className="gallery-card gallery-card-active">
              <img
                src={getImage(0).src}
                alt={getImage(0).alt}
                key={getImage(0).id}
              />

              <div className="gallery-card-overlay">
                <span className="gallery-card-number">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(galleryImages.length).padStart(2, "0")}
                </span>

                <h3>{getImage(0).title}</h3>
              </div>
            </article>

            {/* Next Image */}
            <article className="gallery-card gallery-card-side gallery-card-right">
              <img src={getImage(1).src} alt={getImage(1).alt} />

              <div className="gallery-card-overlay">
                <h3>{getImage(1).title}</h3>
              </div>
            </article>
          </div>

          <button
            className="gallery-arrow gallery-arrow-right"
            onClick={nextSlide}
            aria-label="View next photos"
            type="button"
          >
            &#8594;
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="gallery-bottom">
          <div className="gallery-dots" aria-label="Choose a gallery photo">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                className={`gallery-dot ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                type="button"
              />
            ))}
          </div>

          <p className="gallery-caption">
            Explore the beauty. Experience the comfort.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
