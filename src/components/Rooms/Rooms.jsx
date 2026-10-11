import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import "./Rooms.css";

const rooms = [
  {
    id: 1,
    name: "Room One",
    category: "COMFORTABLE STAY",
    description:
      "A welcoming space to unwind, relax, and enjoy a comfortable stay.",
    images: [
      "images/rooms/Room1-1.jpg"
    ],
  },
  {
    id: 2,
    name: "Room Two",
    category: "RELAX & RECHARGE",
    description: "Settle in, take a breath, and make yourself at home.",
    images: [
      "images/rooms/Room2-1.jpg"
    ],
  },
  {
    id: 3,
    name: "Room Three",
    category: "YOUR PERSONAL RETREAT",
    description: "A peaceful corner to slow down after a day of exploring.",
    images: [
      "images/rooms/Room3-1.jpg"
    ],
  },
  {
    id: 4,
    name: "Room Four",
    category: "MADE FOR UNWINDING",
    description: "A simple, inviting space for a restful and memorable visit.",
    images: ["images/rooms/Room4-1.jpg", "images/rooms/Room4-2.jpg"],
  },
  {
    id: 5,
    name: "Room Five",
    category: "A PLACE TO FEEL AT HOME",
    description:
      "Find your own pace in a space made for comfort and relaxation.",
    images: ["images/rooms/Room5-1.jpg"],
  },
];

// Replace this with the homestay's WhatsApp number.
// Include the country code, without +, spaces, or dashes.
const WHATSAPP_NUMBER = "919831016122";

function RoomCard({ room }) {
  const [currentImage, setCurrentImage] = useState(0);

  const showPrevious = () => {
    setCurrentImage((index) =>
      index === 0 ? room.images.length - 1 : index - 1,
    );
  };

  const showNext = () => {
    setCurrentImage((index) =>
      index === room.images.length - 1 ? 0 : index + 1,
    );
  };

  const message = encodeURIComponent(
    `Hello Mamta Homestay, I would like to enquire about ${room.name}. Please share the availability and tariff.`,
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <article className="room-card">
      <div className="room-image-wrap">
        <img
          className="room-image"
          src={room.images[currentImage]}
          alt={`${room.name} - photo ${currentImage + 1}`}
          loading="lazy"
        />

        <span className="room-image-category">{room.category}</span>

        <div className="room-image-counter">
          {String(currentImage + 1).padStart(2, "0")}
          <span>/</span>
          {String(room.images.length).padStart(2, "0")}
        </div>

        <button
          type="button"
          className="room-arrow room-arrow-left"
          onClick={showPrevious}
          aria-label={`Previous photo of ${room.name}`}
        >
          <ArrowLeft size={18} />
        </button>

        <button
          type="button"
          className="room-arrow room-arrow-right"
          onClick={showNext}
          aria-label={`Next photo of ${room.name}`}
        >
          <ArrowRight size={18} />
        </button>

        <div className="room-image-dots">
          {room.images.map((image, index) => (
            <button
              key={`${room.id}-${image}-${index}`}
              type="button"
              className={`room-dot ${
                currentImage === index ? "room-dot-active" : ""
              }`}
              onClick={() => setCurrentImage(index)}
              aria-label={`Show photo ${index + 1} of ${room.name}`}
              aria-pressed={currentImage === index}
            />
          ))}
        </div>
      </div>

      <div className="room-card-content">
        <div className="room-card-heading">
          <span className="room-number">
            ROOM {String(room.id).padStart(2, "0")}
          </span>

          <h3>{room.name}</h3>
        </div>

        <p className="room-description">{room.description}</p>

        <div className="room-card-footer">
          <a
            className="room-enquire-link"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${room.name} on WhatsApp`}
          >
            <MessageCircle size={17} />
            Enquire on WhatsApp
          </a>

          <a
            className="room-details-link"
            href="#contact"
            aria-label={`Ask us about ${room.name}`}
          >
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </article>
  );
}

function Rooms() {
  return (
    <section className="rooms-section" id="rooms">
      <div className="rooms-container">
        <div className="rooms-heading">
          <div className="rooms-heading-copy">
            <span className="section-label">YOUR STAY, YOUR SPACE</span>

            <h2 className="section-title">
              Find your place
              <br />
              <span className="rooms-title-accent">to unwind.</span>
            </h2>
          </div>

          <p className="rooms-heading-description">
            Every journey deserves a comfortable place to return to. Explore our
            rooms and get in touch to plan your stay.
          </p>
        </div>

        <div className="rooms-grid">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        <div className="rooms-bottom-note">
          <span className="rooms-bottom-line" />
          <p>
            Need help choosing? We're happy to help you find the right room.
          </p>
          <a href="#contact">
            Talk to us <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Rooms;
