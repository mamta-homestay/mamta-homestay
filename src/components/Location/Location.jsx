import "./Location.css";

import "./Location.css";

const googleMapsUrl = "https://maps.app.goo.gl/1BGpuaaUuVty9zG88";

const directionsUrl = googleMapsUrl;

const mapUrl =
  "https://maps.google.com/maps?q=Mamta+Homestay+Darjeeling&output=embed";

function Location() {
  return (
    <section className="location-section" id="location">
      <div className="location-container">
        {/* LEFT: LOCATION INFORMATION */}
        <div className="location-content">
          <span className="location-eyebrow">FIND YOUR WAY TO US</span>

          <h2>
            A Beautiful Stay,
            <br />
            <span>In a Beautiful Place.</span>
          </h2>

          <p className="location-description">
            Nestled in the charming hill town of Darjeeling, Mamta Homestay
            welcomes you to experience a comfortable stay surrounded by the
            beauty and charm of the mountains.
          </p>

          {/* LOCATION DETAILS */}
          <div className="location-details">
            {/* Address */}
            <div className="location-detail">
              <div className="location-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div className="location-detail-text">
                <h3>Our Location</h3>

                <p>
                    Mamta Homestay, Gandhi Road, 
                    Near Deaf & Dumb School, Darjeeling, West Bengal, 
                    734101, India
                </p>
              </div>
            </div>

            {/* Destination */}
            <div className="location-detail">
              <div className="location-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>

              <div className="location-detail-text">
                <h3>Explore Darjeeling</h3>

                <p>
                  Plan your journey to the beautiful hills of Darjeeling and
                  make Mamta Homestay your base for a memorable getaway.
                </p>
              </div>
            </div>
          </div>

          {/* DIRECTIONS BUTTON */}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            <span>Get Directions</span>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        {/* RIGHT: GOOGLE MAP */}
        <div className="location-map-wrapper">
          <div className="location-map">
            <iframe
              title="Mamta Homestay on Google Maps"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* MAP CAPTION */}
          <div className="location-map-caption">
            <div className="location-caption-left">
              <span className="location-caption-dot" />

              <span className="location-caption-text">
                Darjeeling, West Bengal, India
              </span>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="location-map-link"
            >
              Open Map
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
