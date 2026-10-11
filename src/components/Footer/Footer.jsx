import "./Footer.css";

const WHATSAPP_NUMBER = "919831016122";
const EMAIL_ADDRESS = "mamtahomestay2026@gmail.com";
const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/1BGpuaaUuVty9zG88";

function Footer() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Mamta Homestay! I would like to know more about your homestay and booking availability.",
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        {/* BRAND SECTION */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <img
              src="/Logo-White.png"
              alt="Mamta Homestay Logo"
              className="footer-logo-image"
            />

            <span className="footer-brand-name">Mamta Homestay</span>
          </a>

          <p className="footer-description">
            A welcoming place to relax, unwind, and make beautiful memories. We
            look forward to making your stay comfortable and memorable.
          </p>

          <button
            type="button"
            className="footer-booking-button"
            onClick={handleWhatsApp}
          >
            Enquire on WhatsApp
            <span aria-hidden="true">↗</span>
          </button>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#gallery">Gallery</a>
          <a href="#videos">Videos</a>
          <a href="#enquiry">Enquire Now</a>
        </div>

        {/* CONTACT SECTION */}
        <div className="footer-column footer-contact">
          <h3>Get in Touch</h3>

          <div className="footer-contact-item">
            <span className="footer-contact-label">Email</span>

            <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-label">Phone / WhatsApp</span>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 98310 16122
            </a>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-label">Location</span>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions ↗
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mamta Homestay. All rights reserved.</p>

        <a href="#home" className="footer-back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
