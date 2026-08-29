import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import CarList from "./pages/CarList";
import CarDetails from "./pages/CarDetails";
import Booking from "./pages/Booking";

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