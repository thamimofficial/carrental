import car1 from "../assets/lamborghini.webp";
import car2 from "../assets/ferrari.webp";
import car3 from "../assets/porche.webp";

const cars = [
  {
    id: 1,
    brand: "Lamborghini",
    model: "Revuelto",
    price: 6500,
    year: 2024,
    engine: "6.5-L V12",
    engineSize: "6.5-L V12",
    engineType: "Petrol",
    acceleration: "2.5 Seconds",
    seats: 2,
    color: "Grey",
    horsepower: "1001 HP",
    topSpeed: "350 km/h",
    image: car1,

    description:
      "Lamborghini Revuelto combines a powerful V12 engine with modern hybrid technology.",

    bookingInfo: [
      "This Revuelto is carefully prepared before every rental. You can enjoy a comfortable, powerful and premium driving experience in Dubai.",
      "The Revuelto is suitable for special occasions, business trips, holidays and luxury driving experiences."
    ],

    pricingInfo: [
      "The rental price for this car is AED 6,500 per day. Availability depends on the selected rental dates, so book early if you have a specific date in mind.",
      "Members of our no-deposit membership program can skip the standard security deposit and get priority access to this specific unit when demand is high."
    ],

    whyChoose: [
      "The Revuelto combines luxury, performance and modern design. It provides a premium experience for customers looking for a high-performance car.",
      "Whether you are driving around Dubai or attending a special event, this car provides an excellent luxury driving experience."
    ],

    drivingFeel:
      "With 1,001 HP split between a naturally aspirated V12 and three electric motors, this Revuelto doesn't drive like a conventional supercar. The electric motors bolted on to the front axle mean the throttle response feels immediate, even when the V12 has not yet fully spun up."
  },

  {
    id: 2,
    brand: "Ferrari",
    model: "12Cilindri",
    price: 6000,
    year: 2025,
    engine: "6.5-L V12",
    engineSize: "6.5-L V12",
    engineType: "Petrol",
    acceleration: "2.9 Seconds",
    seats: 2,
    color: "Blue",
    horsepower: "830 HP",
    topSpeed: "340 km/h",
    image: car2,

    description:
      "Ferrari 12Cilindri is a powerful V12 car with a beautiful Italian design.",

    bookingInfo: [
      "This 12Cilindri is carefully prepared before every rental. You can enjoy a comfortable, powerful and premium driving experience in Dubai.",
      "The 12Cilindri is suitable for special occasions, business trips, holidays and luxury driving experiences."
    ],

    pricingInfo: [
      "The rental price for this car is AED 6,000 per day. Availability depends on the selected rental dates, so book early if you have a specific date in mind.",
      "Members of our no-deposit membership program can skip the standard security deposit and get priority access to this specific unit when demand is high."
    ],

    whyChoose: [
      "The 12Cilindri combines luxury, performance and modern design. It provides a premium experience for customers looking for a high-performance car.",
      "Whether you are driving around Dubai or attending a special event, this car provides an excellent luxury driving experience."
    ],

    drivingFeel:
      "The naturally aspirated V12 revs all the way to 9,500 rpm and makes a completely different sound to anything turbocharged or hybrid. It's a driving experience built around the engine itself, not just the numbers it produces."
  },

  {
    id: 3,
    brand: "Aston Martin",
    model: "DB12",
    price: 4500,
    year: 2024,
    engine: "4.0-L V8",
    engineSize: "4.0-L V8",
    engineType: "Petrol",
    acceleration: "3.5 Seconds",
    seats: 4,
    color: "Black",
    horsepower: "671 HP",
    topSpeed: "325 km/h",
    image: car3,

    description:
      "Aston Martin DB12 gives a good combination of luxury, comfort and performance.",

    bookingInfo: [
      "This DB12 is carefully prepared before every rental. You can enjoy a comfortable, powerful and premium driving experience in Dubai.",
      "The DB12 is suitable for special occasions, business trips, holidays and luxury driving experiences."
    ],

    pricingInfo: [
      "The rental price for this car is AED 4,500 per day. Availability depends on the selected rental dates, so book early if you have a specific date in mind.",
      "Members of our no-deposit membership program can skip the standard security deposit and get priority access to this specific unit when demand is high."
    ],

    whyChoose: [
      "The DB12 combines luxury, performance and modern design. It provides a premium experience for customers looking for a high-performance car.",
      "Whether you are driving around Dubai or attending a special event, this car provides an excellent luxury driving experience."
    ],

    drivingFeel:
      "The DB12 is a proper grand tourer, so it's built to feel relaxed on a long highway run and still tighten up when you want it to. Four seats mean you can actually bring people along instead of just showing off."
  }
];

export default cars;