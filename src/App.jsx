import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import CarList from "./Pages/CarList";
import CarDetails from "./Pages/CarDetails";
import Booking from "./Pages/Booking";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<CarList />}
        />

        <Route
          path="/car/:id"
          element={<CarDetails />}
        />

        <Route
          path="/booking/:id"
          element={<Booking />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;