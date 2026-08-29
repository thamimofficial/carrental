import { Link, useParams } from "react-router-dom";
import {
  FaCalendarAlt,
  FaCogs,
  FaGasPump,
  FaUserFriends,
  FaPalette,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Header from "../components/Header";
import cars from "../data/cars";

function CarDetails() {
  // get id from url, like /car/1
  const { id } = useParams();

  // find that car from my cars.js file
  // id in url is string so I convert to Number to match
  const car = cars.find(
    (item) => item.id === Number(id)
  );

  // if car not found, just show simple message
  if (!car) {
    return <h1>Car not found</h1>;
  }

  return (
    <div className="mainPage">

      <Header />

      <main className="pageBox">

        {/* small path on top, like Home > Brand > Model */}

        <div className="path">
          <Link to="/">Rental Cars</Link>
          {" / "}
          <Link to="/" className="pathActive">
            {car.brand}
          </Link>
          {" / "}
          {car.model}
        </div>


        {/* everything split in 2 side, left big info, right booking box */}

        <div className="twoSide">

          {/* LEFT SIDE */}

          <div>

            <img
              src={car.image}
              alt={car.model}
              className="carImage"
            />


            {/* just some tabs, they scroll down to section below */}

            <div className="tabs">
              <a href="#specifications">Specifications</a>
              <a href="#requirements">Requirements</a>
              <a href="#faq">FAQ</a>
            </div>


            {/* Specification part */}

            <section className="specBox" id="specifications">

              <h2>Specifications</h2>

              {/* small cards with icon, showing main specs */}

              <div className="specCards">

                <div className="oneCard">
                  <FaCalendarAlt className="cardIcon" />
                  <p>Year</p>
                  <strong>{car.year}</strong>
                </div>

                <div className="oneCard">
                  <FaCogs className="cardIcon" />
                  <p>Engine Size</p>
                  <strong>{car.engineSize}</strong>
                </div>

                <div className="oneCard">
                  <FaGasPump className="cardIcon" />
                  <p>Engine Type</p>
                  <strong>{car.engineType}</strong>
                </div>

                <div className="oneCard">
                  <FaUserFriends className="cardIcon" />
                  <p>Seats</p>
                  <strong>{car.seats}</strong>
                </div>

                <div className="oneCard">
                  <FaPalette className="cardIcon" />
                  <p>Color</p>
                  <strong>{car.color}</strong>
                </div>

              </div>


              {/* same data again but as table, looks like real spec sheet */}

              <table className="specTable">
                <tbody>
                  <tr>
                    <td>Year</td>
                    <td>{car.year}</td>
                  </tr>
                  <tr>
                    <td>Engine Size</td>
                    <td>{car.engineSize}</td>
                  </tr>
                  <tr>
                    <td>Engine Type</td>
                    <td>{car.engineType}</td>
                  </tr>
                  <tr>
                    <td>Seats</td>
                    <td>{car.seats}</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>{car.color}</td>
                  </tr>
                  <tr>
                    <td>0-100 Km/h</td>
                    <td>{car.acceleration}</td>
                  </tr>
                  <tr>
                    <td>Horse Power</td>
                    <td>{car.horsepower}</td>
                  </tr>
                  <tr>
                    <td>Max Speed</td>
                    <td>{car.topSpeed}</td>
                  </tr>
                </tbody>
              </table>

            </section>


            {/* Big text part, all about the car */}

            <section className="infoBox">

              <h2>
                Rent This {car.brand} {car.model} in Dubai
              </h2>

              <p>
                {car.description}
              </p>


              <h3>Quick Facts About This Unit</h3>

              <p><strong>Model year:</strong> {car.year}</p>
              <p><strong>Exterior colour:</strong> {car.color}</p>
              <p><strong>Engine:</strong> {car.engineSize} ({car.engineType})</p>
              <p><strong>Horsepower:</strong> {car.horsepower}</p>
              <p><strong>0-100 km/h:</strong> {car.acceleration}</p>
              <p><strong>Top speed:</strong> {car.topSpeed}</p>
              <p><strong>Seats:</strong> {car.seats}</p>
              <p>
                <strong>Average price:</strong> AED{" "}
                {car.price.toLocaleString()} per day
              </p>


              <h3>
                What You're Booking When You Reserve This {car.model}
              </h3>

              {/*
                bookingInfo is array of text in cars.js
                I use map so I don't need to write <p> many times by hand
              */}
              {car.bookingInfo.map((line, index) => (
                <p key={index}>{line}</p>
              ))}


              <h3>
                Pricing and Availability for This {car.model}
              </h3>

              {car.pricingInfo.map((line, index) => (
                <p key={index}>{line}</p>
              ))}


              <h3>Why Choose This {car.brand}?</h3>

              {car.whyChoose.map((line, index) => (
                <p key={index}>{line}</p>
              ))}


              <h3>What Driving This {car.model} Feels Like</h3>

              <p>{car.drivingFeel}</p>


              <h3>Book Your {car.model} Today</h3>

              <p>
                Select your rental dates and complete the booking
                form to reserve this {car.brand} {car.model}.
              </p>

            </section>

          </div>


          {/* RIGHT SIDE, sticky booking box */}

          <div className="bookingBox">

            {/* small image + name on top of booking box */}

            <div className="smallInfo">

              <img src={car.image} alt={car.model} />

              <div>
                <h3>{car.brand} {car.model}</h3>
                <p>Luxury car rental in Dubai</p>
              </div>

            </div>


            {/* price show here, big number and small text below */}

            <div className="priceBox">
              <strong>{car.price.toLocaleString()}</strong>
              <span>AED / Day</span>
            </div>


            {/* Book Now button + call icon + whatsapp icon in same row */}

            <div className="bookRow">

              <Link
                to={`/booking/${car.id}`}
                className="bookBtn"
              >
                Book Now
              </Link>

              <a href="tel:+971000000000" className="roundBtn" aria-label="Call">
                <FaPhoneAlt />
              </a>

              <a href="https://wa.me/971000000000" className="roundBtn" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>

            </div>


            {/* bottom row, free deposit text left side, member button right side */}

            <div className="bottomRow">

              <span className="depositText">
                <FaMapMarkerAlt /> Unlock for Free Deposit
              </span>

              <button className="memberBtn">
                Become a Member
              </button>

            </div>

          </div>

        </div>

      </main>

      {/* all my css here, I keep it in same file so easy to find */}

      <style>
        {`
          * {
            box-sizing: border-box;
          }

          .mainPage {
            background-color: #fff9f0;
            min-height: 100vh;
            font-family: "Poppins", sans-serif;
          }

          .pageBox {
            max-width: 1200px;
            margin: auto;
            padding: 30px 20px;
          }

          /* small path text on top */

          .path {
            margin-bottom: 20px;
            font-size: 13px;
            color: #555;
          }

          .path a {
            color: #111;
            text-decoration: none;
          }

          .pathActive {
            color: #f5a623;
          }

          /* left and right side layout */

          .twoSide {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            gap: 25px;
            align-items: start;
          }

          .carImage {
            width: 100%;
            height: 550px;
            object-fit: cover;
            border-radius: 8px;
            display: block;
          }

          .tabs {
            display: flex;
            gap: 25px;
            margin-top: 15px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
            font-size: 13px;
          }

          .tabs a {
            color: #555;
            text-decoration: none;
          }

          /* first tab looks active/bold */

          .tabs a:first-child {
            color: #111;
            font-weight: 600;
          }

          .specBox {
            margin-top: 30px;
          }

          .specBox h2 {
            font-size: 20px;
            margin-bottom: 15px;
          }

          /* 5 small cards in one row */

          .specCards {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 10px;
          }

          .oneCard {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 6px;
            padding: 15px;
            text-align: center;
          }

          .cardIcon {
            display: block;
            margin: 0 auto 6px;
            font-size: 18px;
            color: #f5a623;
          }

          .oneCard p {
            font-size: 12px;
            color: #777;
            margin-bottom: 5px;
          }

          /* table with all specs, stripe color on odd row */

          .specTable {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
            font-size: 13px;
          }

          .specTable td {
            padding: 10px 12px;
          }

          .specTable tr:nth-child(odd) {
            background-color: #f4f4f4;
          }

          .specTable td:first-child {
            color: #777;
            width: 40%;
          }

          .infoBox {
            margin-top: 35px;
            max-width: 800px;
          }

          .infoBox h2 {
            font-size: 20px;
            margin-bottom: 15px;
          }

          .infoBox h3 {
            font-size: 17px;
            margin-top: 30px;
            margin-bottom: 10px;
          }

          .infoBox p {
            font-size: 13px;
            line-height: 1.8;
            margin-bottom: 15px;
          }

          /* right side sticky box */

          .bookingBox {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 18px;
            position: sticky;
            top: 20px;
            align-self: start;
          }

          .smallInfo {
            display: flex;
            gap: 12px;
            align-items: center;
          }

          .smallInfo img {
            width: 80px;
            height: 55px;
            object-fit: cover;
            border-radius: 5px;
          }

          .smallInfo h3 {
            font-size: 14px;
            margin-bottom: 3px;
          }

          .smallInfo p {
            font-size: 10px;
            color: #666;
          }

          .priceBox {
            margin-top: 25px;
            margin-bottom: 20px;
          }

          .priceBox strong {
            font-size: 32px;
            display: block;
          }

          .priceBox span {
            font-size: 12px;
            color: #e05656;
          }

          /* book now button + phone/whatsapp icon in one line */

          .bookRow {
            display: flex;
            gap: 10px;
          }

          .bookBtn {
            flex: 1;
            padding: 13px;
            background-color: #f5cd22;
            color: #111;
            text-align: center;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
          }

          .roundBtn {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #ddd;
            border-radius: 6px;
            text-decoration: none;
            font-size: 16px;
            color: #111;
          }

          .bottomRow {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            padding-top: 18px;
            margin-top: 15px;
            border-top: 1px solid #ddd;
            font-size: 11px;
          }

          .depositText {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #e05656;
          }

          .memberBtn {
            border: 1px solid #f5cd22;
            background: #fff;
            padding: 7px 10px;
            border-radius: 4px;
            font-size: 11px;
            cursor: pointer;
          }
        `}
      </style>

    </div>
  );
}

export default CarDetails;