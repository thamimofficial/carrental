import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

import Header from "../components/Header";
import BookingSummary from "../components/BookingSummary";

import cars from "../data/cars";

function Booking() {
  const { id } = useParams();

  const car = cars.find(
    (item) => item.id === Number(id)
  );

  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("18:00");

  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("18:00");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const [terms, setTerms] = useState(false);

  // this array hold all booking I already submitted
  // I show them below the form, with delete button
  const [savedBookings, setSavedBookings] = useState([]);

  if (!car) {
    return <h1>Car not found</h1>;
  }

  // Calculate rental days

  let days = 1;

  if (pickupDate && returnDate) {
    const start = new Date(pickupDate);
    const end = new Date(returnDate);

    const difference = end - start;

    days = Math.ceil(
      difference / (1000 * 60 * 60 * 24)
    );

    if (days < 1) {
      days = 1;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!name) {
      alert("Please enter your name");
      return;
    }

    if (!email) {
      alert("Please enter your email");
      return;
    }

    if (!phone) {
      alert("Please enter your phone number");
      return;
    }

    if (!terms) {
      alert("Please accept the terms and conditions");
      return;
    }

    // total price same way as BookingSummary do (5% vat)
    const total = car.price * days * 1.05;

    // build one booking object with everything I need to show later
    const newBooking = {
      id: Date.now(),
      carName: `${car.brand} ${car.model}`,
      carImage: car.image,
      pickupDate,
      pickupTime,
      returnDate,
      returnTime,
      name,
      email,
      phone,
      country,
      days,
      total
    };

    // add new booking on top of the list
    setSavedBookings((prev) => [newBooking, ...prev]);

    alert("Booking submitted successfully!");
  }

  // remove one booking from the list by id
  function handleDelete(bookingId) {
    setSavedBookings((prev) =>
      prev.filter((item) => item.id !== bookingId)
    );
  }

  return (
    <>
      <Header />

      <main className="bookingPage">

        <div className="bookingGrid">

          {/* LEFT SIDE */}

          {/*
            I give this form an id, then the Submit button
            inside BookingSummary points to this id using
            the "form" attribute. That way the button works
            even though it's not physically inside this tag.
          */}

          <form
            id="carBookingForm"
            onSubmit={handleSubmit}
            className="formBox"
          >

            <h2 className="formTitle">Select Dates</h2>

            {/* DATE ROW */}

            <div className="dateRow">

              {/* PICKUP */}

              <div>
                <label className="fieldLabel">
                  Pick-up date
                </label>

                <div className="dateTimeBox">
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(event) =>
                      setPickupDate(event.target.value)
                    }
                    className="dateInput"
                  />

                  <input
                    type="time"
                    value={pickupTime}
                    onChange={(event) =>
                      setPickupTime(event.target.value)
                    }
                    className="timeInput"
                  />
                </div>
              </div>

              {/* RETURN */}

              <div>
                <label className="fieldLabel">
                  Return date
                </label>

                <div className="dateTimeBox">
                  <input
                    type="date"
                    min={pickupDate}
                    value={returnDate}
                    onChange={(event) =>
                      setReturnDate(event.target.value)
                    }
                    className="dateInput"
                  />

                  <input
                    type="time"
                    value={returnTime}
                    onChange={(event) =>
                      setReturnTime(event.target.value)
                    }
                    className="timeInput"
                  />
                </div>
              </div>
            </div>

            {/* CUSTOMER DETAILS */}

            <h2 className="formTitle formTitleSpaced">
              Please Fill/Confirm Your Details
            </h2>

            {/* NAME */}

            <div className="fieldGroup">
              <label className="fieldLabel">Name</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                className="textInput"
              />
            </div>

            {/* EMAIL */}

            <div className="fieldGroup">
              <label className="fieldLabel">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                className="textInput"
              />
            </div>

            {/* RETYPE EMAIL */}

            <div className="fieldGroup">
              <label className="fieldLabel">Retype Email</label>
              <input
                type="email"
                placeholder="Retype Email"
                className="textInput"
              />
            </div>

            {/* COUNTRY + PHONE */}

            <div className="fieldGroup">
              <label className="fieldLabel">Country & Phone</label>

              <div className="countryPhoneRow">
                <select
                  value={country}
                  onChange={(event) =>
                    setCountry(event.target.value)
                  }
                  className="countrySelect"
                >
                  <option value="">Select Country</option>
                  <option value="UAE">UAE</option>
                  <option value="India">India</option>
                  <option value="UK">UK</option>
                  <option value="USA">USA</option>
                </select>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(event) =>
                    setPhone(event.target.value)
                  }
                  className="phoneInput"
                />
              </div>
            </div>

            {/* TERMS */}

            <div className="termsBlock">

              <label className="termsLabel">
                <input
                  type="checkbox"
                  checked={terms}
                  onChange={(event) =>
                    setTerms(event.target.checked)
                  }
                  className="termsCheckbox"
                />
                I Agree To The Terms And Conditions
              </label>

              <p className="termsText">
                I have read and accept the Terms and
                Conditions, and the Privacy Policy and I
                acknowledge that I am booking a prepaid rate,
                where the total reservation price is
                immediately charged to the payment method
                I provided.
              </p>

              <a href="#" className="infoLink">
                Important information about your reservation
              </a>

            </div>

          </form>

          {/* RIGHT SIDE */}

          <BookingSummary
            car={car}
            days={days}
            formId="carBookingForm"
          />

        </div>

        {/* SAVED BOOKINGS, show under the booking form + summary */}
        {/* this one show like excel sheet, just columns in a table */}

        {savedBookings.length > 0 && (
          <div className="savedBox">

            <h2 className="savedTitle">My Bookings</h2>

            <table className="savedTable">

              <thead>
                <tr>
                  <th>Car Name</th>
                  <th>Customer Details</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {savedBookings.map((item) => (
                  <tr key={item.id}>

                    <td>{item.carName}</td>

                    <td>
                      {item.name} • {item.email} • {item.phone}
                      {item.country ? ` • ${item.country}` : ""}
                      <br />
                      Pick-up: {item.pickupDate || "—"} {item.pickupTime}
                      {" "}→{" "}
                      Return: {item.returnDate || "—"} {item.returnTime}
                    </td>

                    <td>
                      {item.total.toLocaleString()} AED
                      <br />
                      ({item.days} Days)
                    </td>

                    <td>
                      {/* click this to remove the booking from list */}
                      <button
                        type="button"
                        className="deleteBtn"
                        onClick={() => handleDelete(item.id)}
                        aria-label="Delete booking"
                      >
                        <FaTrash />
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        )}

      </main>

      {/* css here, same way I do in other pages */}

      <style>
        {`
          .bookingPage {
            width: 100%;
            max-width: 1500px;
            margin: 30px auto;
            padding: 0 20px;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }

          .bookingGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            align-items: start;
          }

          .formBox {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            box-sizing: border-box;
          }

          .formTitle {
            font-size: 19px;
            margin: 0 0 20px 0;
          }

          .formTitleSpaced {
            margin-top: 35px;
          }

          .dateRow {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
            margin-bottom: 10px;
          }

          .fieldGroup {
            margin-bottom: 20px;
          }

          .fieldLabel {
            display: block;
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 8px;
          }

          .dateTimeBox {
            display: flex;
            border: 1px solid #f5b800;
            border-radius: 8px;
            overflow: hidden;
            height: 42px;
          }

          .dateInput {
            width: 60%;
            border: none;
            padding: 8px 10px;
            font-size: 13px;
            outline: none;
            font-family: "Poppins", sans-serif;
          }

          .timeInput {
            width: 40%;
            border: none;
            border-left: 1px solid #f5b800;
            padding: 8px;
            font-size: 13px;
            outline: none;
            font-family: "Poppins", sans-serif;
          }

          .textInput {
            width: 100%;
            height: 42px;
            border: 1px solid #f5b800;
            border-radius: 8px;
            padding: 0 12px;
            box-sizing: border-box;
            font-size: 13px;
            outline: none;
            font-family: "Poppins", sans-serif;
          }

          .countryPhoneRow {
            display: flex;
            gap: 15px;
          }

          .countrySelect {
            width: 120px;
            height: 42px;
            border: 1px solid #f5b800;
            border-radius: 8px;
            padding: 0 8px;
            font-size: 13px;
            background-color: #fff;
            font-family: "Poppins", sans-serif;
          }

          .phoneInput {
            flex: 1;
            height: 42px;
            border: 1px solid #f5b800;
            border-radius: 8px;
            padding: 0 12px;
            font-size: 13px;
            outline: none;
            font-family: "Poppins", sans-serif;
          }

          .termsBlock {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
          }

          .termsLabel {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 12px;
            margin-bottom: 15px;
            cursor: pointer;
          }

          .termsCheckbox {
            width: 17px;
            height: 17px;
          }

          .termsText {
            font-size: 11px;
            color: #999;
            line-height: 1.7;
            margin: 0 0 15px 0;
          }

          .infoLink {
            color: #222;
            font-size: 12px;
            font-weight: 600;
            text-decoration: underline;
            font-family: "Poppins", sans-serif;
          }

          /* saved bookings list, show below the grid */

          .savedBox {
            margin-top: 35px;
          }

          .savedTitle {
            font-size: 19px;
            margin-bottom: 15px;
          }

          .savedTable {
            width: 100%;
            border-collapse: collapse;
            background-color: #fff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          }

          .savedTable th {
            text-align: left;
            font-size: 12px;
            color: #777;
            background-color: #faf6ea;
            padding: 12px 15px;
            border-bottom: 1px solid #eee;
          }

          .savedTable td {
            font-size: 12px;
            color: #333;
            padding: 14px 15px;
            border-bottom: 1px solid #f2f2f2;
            vertical-align: top;
          }

          .savedTable tr:last-child td {
            border-bottom: none;
          }

          .deleteBtn {
            width: 36px;
            height: 36px;
            border: 1px solid #f1c1c1;
            background-color: #fff;
            color: #e05656;
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .deleteBtn:hover {
            background-color: #fdeaea;
          }
        `}
      </style>
    </>
  );
}

export default Booking;