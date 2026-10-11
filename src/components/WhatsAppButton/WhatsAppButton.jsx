import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WHATSAPP_NUMBER = "919831016122";

const WhatsAppButton = () => {
  const message = encodeURIComponent(
    "Hello Mamta Homestay! I would like to know more about your rooms and availability.",
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />

      <span className="whatsapp-text">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
