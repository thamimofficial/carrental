# POF Rental

Luxury car rental website for Dubai. Browse cars, view details, and book a car online.

## Built With

- React (Vite)
- React Router (page navigation)
- React Icons (icons used across the app)
- Plain CSS (styled inside each component using a `<style>` tag)

## Pages

- **Home / Car List** — shows all cars, filter by brand
- **Car Details** — specs, description, and booking card for one car
- **Booking** — pick dates, enter your details, submit booking (bookings show in a table below, with delete option)

## Folder Structure

```
src/
  assets/       car images, logo
  components/   Header, CarCard, BookingSummary
  data/         cars.js (all car info)
  pages/        CarList, CarDetails, Booking
  App.jsx
  main.jsx
```

## Run Locally

```
npm install
npm run dev
```