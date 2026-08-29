import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaCogs,
  FaUserFriends,
  FaPalette,
  FaMapMarkerAlt,
} from "react-icons/fa";

// this card show on home page, one card = one car
function CarCard({ car }) {
  return (
    <div className="cardBox">

      {/* click image to go car details page */}

      <Link to={`/car/${car.id}`} className="cardImageLink">
        <img
          src={car.image}
          alt={car.model}
          className="cardImage"
        />
      </Link>

      <div>

        {/* big price on top, small text next to it */}

        <div className="cardPrice">
          <strong>{car.price.toLocaleString()}</strong>
          <span>AED / Day</span>
        </div>

        <h2>
          {car.brand} | {car.model}
        </h2>

        <p>
          {car.description}
        </p>

        {/* small row with icon + value, same icons like details page */}

        <div className="cardSpecs">
          <span>
            <FaCalendarAlt className="cardIcon" /> {car.year}
          </span>

          <span>
            <FaCogs className="cardIcon" /> {car.engine}
          </span>

          <span>
            <FaUserFriends className="cardIcon" /> {car.seats}
          </span>

          <span>
            <FaPalette className="cardIcon" /> {car.color}
          </span>
        </div>

        {/* location text at bottom, with map pin icon */}

        <p className="cardLocation">
          <FaMapMarkerAlt /> POF Rental Al Quoz 1, Dubai UAE
        </p>

      </div>

      {/* css here, same way I do in CarDetails page */}

      <style>
        {`
          .cardBox {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 12px;
            display: flex;
            gap: 25px;
            margin-bottom: 20px;
            font-family: "Poppins", sans-serif;
          }

          .cardImageLink {
            text-decoration: none;
          }

          .cardImage {
            width: 350px;
            height: 250px;
            object-fit: cover;
            border-radius: 8px;
          }

          .cardPrice {
            display: flex;
            align-items: baseline;
            gap: 8px;
          }

          .cardPrice strong {
            font-size: 40px;
          }

          .cardSpecs {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-top: 20px;
          }

          .cardSpecs span {
            display: flex;
            align-items: center;
            gap: 6px;
          }

          .cardIcon {
            color: #f5a623;
          }

          .cardLocation {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #777;
            margin-top: 20px;
          }

          /* MOBILE STYLE, screen 768px or smaller */
          /* on phone, image + text side by side was too squeezed */
          /* so I stack image on top, text below, like in the video */

          @media (max-width: 768px) {

            .cardBox {
              flex-direction: column;
              gap: 12px;
              padding: 10px;
            }

            .cardImageLink {
              width: 100%;
            }

            .cardImage {
              width: 100%;
              height: 200px;
            }

            .cardPrice strong {
              font-size: 28px;
            }

            .cardSpecs {
              flex-wrap: wrap;
              gap: 12px;
              row-gap: 8px;
            }
          }
        `}
      </style>

    </div>
  );
}

export default CarCard;