import {
  Wifi,
  CarFront,
  Coffee,
  Utensils,
  Mountain,
  BedDouble,
  Bath,
  Wind,
  ShieldCheck,
  UtensilsCrossed,
  Sunrise,
  HeartHandshake,
} from "lucide-react";

import "./Amenities.css";

const amenities = [
  {
    id: 1,
    title: "Free Wi-Fi",
    description: "Stay connected throughout your visit.",
    icon: Wifi,
  },
  {
    id: 2,
    title: "Comfortable Rooms",
    description: "Relax in a welcoming, restful space.",
    icon: BedDouble,
  },
  {
    id: 3,
    title: "Attached Bathroom",
    description: "Enjoy added privacy and convenience.",
    icon: Bath,
  },
  {
    id: 4,
    title: "Home-Cooked Meals",
    description: "Enjoy a warm meal during your stay.",
    icon: Utensils,
  },
  {
    id: 5,
    title: "Tea & Coffee",
    description: "Take a moment to relax with your favourite cup.",
    icon: Coffee,
  },
  {
    id: 6,
    title: "Parking",
    description: "Convenient parking for guests.",
    icon: CarFront,
  },
  {
    id: 7,
    title: "Comfortable Climate",
    description: "A pleasant space to rest and recharge.",
    icon: Wind,
  },
  {
    id: 8,
    title: "Peaceful Surroundings",
    description: "Enjoy a calmer pace away from the everyday.",
    icon: Mountain,
  },
  {
    id: 9,
    title: "Guest Safety",
    description: "A welcoming environment for your stay.",
    icon: ShieldCheck,
  },
  {
    id: 10,
    title: "Panoramic Dining Views",
    description:
      "Savour your meals with breathtaking panoramic views from our dining area.",
    icon: UtensilsCrossed,
  },
  {
    id: 11,
    title: "Scenic Mountain Views",
    description: "Take in the natural beauty of the surrounding hills.",
    icon: Sunrise,
  },
  {
    id: 12,
    title: "Warm Hospitality",
    description: "Experience thoughtful, personal care throughout your stay.",
    icon: HeartHandshake,
  },
];

function Amenities() {
  return (
    <section className="amenities-section" id="amenities">
      <div className="amenities-container">
        <div className="amenities-heading">
          <span className="section-label">THE LITTLE THINGS MATTER</span>

          <h2 className="section-title">
            Comfort in every
            <br />
            <span className="amenities-title-accent">detail.</span>
          </h2>

          <p className="amenities-intro">
            Thoughtful comforts can make all the difference. Explore the
            amenities available at Mamta Homestay and plan a stay that feels
            right for you.
          </p>
        </div>

        <div className="amenities-grid">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;

            return (
              <article
                className="amenity-card"
                key={amenity.id}
                style={{ "--amenity-index": index }}
              >
                <div className="amenity-icon">
                  <Icon size={23} strokeWidth={1.5} />
                </div>

                <div className="amenity-copy">
                  <h3>{amenity.title}</h3>
                  <p>{amenity.description}</p>
                </div>

                <span className="amenity-number">
                  {String(amenity.id).padStart(2, "0")}
                </span>
              </article>
            );
          })}
        </div>

        <div className="amenities-footer">
          <span className="amenities-footer-line" />

          <p>Have a specific requirement for your stay?</p>

          <a href="#contact">
            Let us know
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Amenities;
