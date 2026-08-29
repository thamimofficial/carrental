import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

function BookingSummary({ car, days, formId }) {
  // simple price math, vat is 5%
  const subtotal = car.price * days;
  const vat = subtotal * 0.05;
  const total = subtotal + vat;

  return (
    <div className="summaryBox">

      <h2 className="summaryTitle">Booking Review</h2>

      {/* CAR DETAILS */}

      <div className="summaryCar">

        <img
          src={car.image}
          alt={car.model}
          className="summaryImage"
        />

        <div>
          <h3 className="summaryCarName">
            {car.brand} | {car.model}
          </h3>

          <strong className="summaryPrice">
            {car.price.toLocaleString()} AED
          </strong>

          <span className="summaryPriceUnit">
            AED /Day
          </span>

          <p className="summaryCarText">
            {car.brand} {car.model} luxury car
          </p>
        </div>
      </div>

      {/* TOTAL */}

      <p className="summaryTotalLabel">
        Total Price .Inc (5%) Vat
      </p>

      <h2 className="summaryTotal">
        {total.toLocaleString()} AED
      </h2>

      {/* small day count with calendar icon */}

      <p className="summaryDays">
        <FaCalendarAlt /> {days} Days
      </p>

      {/* BUTTONS */}

      <div className="summaryBtnRow">

        {/*
          this button is NOT inside the <form> tag (it lives in a
          different component), so a normal type="submit" does
          nothing here. The "form" attribute tells the browser
          which form to submit, using the id passed down as a prop.
        */}

        <button
          type="submit"
          form={formId}
          className="submitBtn"
        >
          Submit My Booking
        </button>

        <Link
          to={`/car/${car.id}`}
          className="readMoreBtn"
        >
          Read More →
        </Link>

      </div>

      {/* css here, same way I do in other pages */}

      <style>
        {`
          .summaryBox {
            background-color: #fff;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            font-family: "Poppins", sans-serif;
          }

          .summaryTitle {
            font-size: 19px;
            margin: 0 0 20px 0;
          }

          .summaryCar {
            display: flex;
            gap: 18px;
            margin-bottom: 20px;
          }

          .summaryImage {
            width: 220px;
            height: 130px;
            object-fit: cover;
            border-radius: 6px;
          }

          .summaryCarName {
            font-size: 15px;
            margin: 2px 0 10px 0;
          }

          .summaryPrice {
            font-size: 16px;
          }

          .summaryPriceUnit {
            font-size: 10px;
            color: #999;
            margin-left: 6px;
          }

          .summaryCarText {
            font-size: 11px;
            margin-top: 12px;
            line-height: 1.6;
          }

          .summaryTotalLabel {
            font-size: 13px;
            margin: 8px 0;
          }

          .summaryTotal {
            font-size: 28px;
            margin: 8px 0;
          }

          .summaryDays {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: #999;
            margin: 0 0 20px 0;
          }

          .summaryBtnRow {
            display: flex;
            gap: 10px;
          }

          .submitBtn {
            flex: 1;
            height: 42px;
            border: none;
            border-radius: 8px;
            background-color: #f5cd22;
            color: #111;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            font-family: "Poppins", sans-serif;
          }

          .readMoreBtn {
            width: 95px;
            height: 42px;
            background-color: #fff;
            border: 1px solid #f5b800;
            border-radius: 8px;
            font-size: 11px;
            cursor: pointer;
            font-family: "Poppins", sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: #111;
          }

          /* MOBILE STYLE, screen 768px or smaller */

          @media (max-width: 768px) {

            .summaryBox {
              padding: 18px;
            }

            /* car image was 220px wide fixed, too big for phone */
            /* let it just take full width instead */

            .summaryCar {
              flex-direction: column;
            }

            .summaryImage {
              width: 100%;
              height: 180px;
            }

            .summaryTotal {
              font-size: 24px;
            }
          }
        `}
      </style>

    </div>
  );
}

export default BookingSummary;