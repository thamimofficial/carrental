import { useState } from "react";

import Header from "../components/Header";
import CarCard from "../components/CarCard";

import cars from "../data/cars";

function CarList() {
  const [brand, setBrand] = useState("All");

  // filter cars by brand, "All" means show everything
  let filteredCars = cars;

  if (brand !== "All") {
    filteredCars = cars.filter(
      (car) => car.brand === brand
    );
  }

  return (
    <div className="listPage">

      <Header />

      <main className="listMain">

        {/* Filters */}

        <div className="filterRow">

          <select
            value={brand}
            onChange={(e) =>
              setBrand(e.target.value)
            }
            className="brandSelect"
          >
            <option value="All">All Brands</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Aston Martin">Aston Martin</option>
          </select>

          <button
            onClick={() => setBrand("All")}
            className="searchBtn"
          >
            Search
          </button>
        </div>

        <h1 className="pageTitle">
          Luxury Rental Cars In Dubai
        </h1>

        <h3 className="listSubTitle">
          Rental Cars
        </h3>

        {filteredCars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
          />
        ))}

      </main>

      {/* css here, same way I do in other pages */}

      <style>
        {`
          .listPage {
            background-color: #fff9f0;
            min-height: 100vh;
            font-family: "Outfit", sans-serif;
          }

          .listMain {
            max-width: 1200px;
            margin: auto;
            padding: 30px 20px;
          }

          .filterRow {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
          }

          .brandSelect {
            width: 300px;
            padding: 15px;
            border: 1px solid #d8b51e;
            border-radius: 8px;
            font-family: "Outfit", sans-serif;
          }

          .searchBtn {
            padding: 0 30px;
            border: none;
            border-radius: 8px;
            background-color: #f5cd22;
            font-weight: bold;
            font-family: "Outfit", sans-serif;
            cursor: pointer;
          }

          .pageTitle {
            text-align: center;
            margin-bottom: 30px;
          }

          .listSubTitle {
            text-decoration: underline;
            margin-bottom: 20px;
          }

          /* MOBILE STYLE, screen 768px or smaller */
          /* on phone, filter row was too tight side by side */
          /* so I make select and button go full width, one on top of other */

          @media (max-width: 768px) {

            .listMain {
              padding: 20px 15px;
            }

            .filterRow {
              flex-direction: column;
              gap: 12px;
              margin-bottom: 20px;
            }

            .brandSelect {
              width: 100%;
              box-sizing: border-box;
            }

            .searchBtn {
              width: 100%;
              height: 45px;
            }

            .pageTitle {
              font-size: 18px;
            }
          }
        `}
      </style>

    </div>
  );
}

export default CarList;