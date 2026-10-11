import { useState } from "react";
import "./Enquiry.css";

const WHATSAPP_NUMBER = "919831016122";

function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    rooms: "1",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, checkIn, checkOut, guests, rooms, message } = formData;

    const whatsappMessage = `
Hello Mamta Homestay!

I would like to enquire about a booking.

BOOKING DETAILS

Name: ${name}
Phone: ${phone}
Check-in Date: ${checkIn}
Check-out Date: ${checkOut}
Number of Guests: ${guests}
Number of Rooms: ${rooms}

Additional Message:
${message.trim() || "No additional message"}

Please let me know the availability and pricing.

Thank you!
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const today = new Date().toLocaleDateString("en-CA");

  return (
    <section className="enquiry-section" id="enquiry">
      <div className="enquiry-container">
        {/* LEFT CONTENT */}

        <div className="enquiry-content">
          <span className="enquiry-label">PLAN YOUR STAY</span>

          <h2>
            Your Mountain
            <br />
            Escape Starts Here.
          </h2>

          <p className="enquiry-description">
            Planning a peaceful getaway? Get in touch with Mamta Homestay to
            enquire about room availability, pricing, and your preferred travel
            dates.
          </p>

          <div className="enquiry-benefits">
            <div className="enquiry-benefit">
              <span className="benefit-icon">✓</span>

              <div>
                <h4>Easy Booking Enquiry</h4>
                <p>Share your travel details in a few simple steps.</p>
              </div>
            </div>

            <div className="enquiry-benefit">
              <span className="benefit-icon">✓</span>

              <div>
                <h4>Direct Communication</h4>
                <p>Contact us directly through WhatsApp.</p>
              </div>
            </div>

            <div className="enquiry-benefit">
              <span className="benefit-icon">✓</span>

              <div>
                <h4>Personal Assistance</h4>
                <p>Discuss your requirements before confirming your stay.</p>
              </div>
            </div>
          </div>

          <div className="enquiry-contact-card">
            <div className="contact-whatsapp-icon">
              <svg
                viewBox="0 0 24 24"
                width="27"
                height="27"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.13 0C5.6 0 .29 5.31.29 11.84c0 2.09.55 4.13 1.6 5.94L.2 24l6.37-1.67a11.83 11.83 0 0 0 5.56 1.42h.01c6.53 0 11.84-5.31 11.84-11.84a11.78 11.78 0 0 0-3.46-8.43ZM12.14 21.7a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.78.99 1.01-3.69-.24-.38a9.82 9.82 0 0 1-1.51-5.2c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.99 2.9a9.81 9.81 0 0 1 2.89 6.98c0 5.44-4.43 9.87-9.87 9.87Zm5.42-7.39c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.49-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
              </svg>
            </div>

            <div>
              <span className="contact-card-label">HAVE QUESTIONS?</span>

              <h4>Chat with us on WhatsApp</h4>

              <p>+91 98310 16122</p>
            </div>
          </div>
        </div>

        {/* ENQUIRY FORM */}

        <div className="enquiry-form-wrapper">
          <div className="enquiry-form-heading">
            <span>BOOKING ENQUIRY</span>

            <h3>Tell Us About Your Stay</h3>

            <p>Fill in your details to start a conversation with us.</p>
          </div>

          <form className="enquiry-form" onSubmit={handleSubmit}>
            {/* NAME */}

            <div className="form-group">
              <label htmlFor="enquiry-name">
                Full Name <span>*</span>
              </label>

              <input
                type="text"
                id="enquiry-name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            {/* PHONE */}

            <div className="form-group">
              <label htmlFor="enquiry-phone">
                Phone Number <span>*</span>
              </label>

              <input
                type="tel"
                id="enquiry-phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                inputMode="tel"
                pattern="[+]?[0-9\s()-]{7,20}"
                title="Enter a valid phone number."
                required
              />
            </div>

            {/* CHECK-IN AND CHECK-OUT */}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="enquiry-checkin">
                  Check-in <span>*</span>
                </label>

                <input
                  type="date"
                  id="enquiry-checkin"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  min={today}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-checkout">
                  Check-out <span>*</span>
                </label>

                <input
                  type="date"
                  id="enquiry-checkout"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  min={formData.checkIn || today}
                  required
                />
              </div>
            </div>

            {/* GUESTS AND ROOMS */}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="enquiry-guests">
                  Number of Guests <span>*</span>
                </label>

                <select
                  id="enquiry-guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                  <option value="9">9 Guests</option>
                  <option value="10">10 Guests</option>
                  <option value="More than 10">More than 10</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-rooms">
                  Number of Rooms <span>*</span>
                </label>

                <select
                  id="enquiry-rooms"
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                  <option value="4">4 Rooms</option>
                  <option value="5">5 Rooms</option>
                  <option value="6 or more">6 or more</option>
                </select>
              </div>
            </div>

            {/* MESSAGE */}

            <div className="form-group">
              <label htmlFor="enquiry-message">Additional Message</label>

              <textarea
                id="enquiry-message"
                name="message"
                placeholder="Tell us about any special requests..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
              />
            </div>

            {/* SUBMIT BUTTON */}

            <button type="submit" className="enquiry-submit-btn">
              <svg
                viewBox="0 0 24 24"
                width="21"
                height="21"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.13 0C5.6 0 .29 5.31.29 11.84c0 2.09.55 4.13 1.6 5.94L.2 24l6.37-1.67a11.83 11.83 0 0 0 5.56 1.42h.01c6.53 0 11.84-5.31 11.84-11.84a11.78 11.78 0 0 0-3.46-8.43ZM12.14 21.7a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.78.99 1.01-3.69-.24-.38a9.82 9.82 0 0 1-1.51-5.2c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.99 2.9a9.81 9.81 0 0 1 2.89 6.98c0 5.44-4.43 9.87-9.87 9.87Z" />
              </svg>

              <span>Submit Enquiry</span>

              <span className="submit-arrow">↗</span>
            </button>

            <p className="enquiry-form-note">
              Your message will open in WhatsApp. Please review it and press
              Send to submit your enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Enquiry;
