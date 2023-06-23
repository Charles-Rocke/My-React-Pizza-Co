import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Typically there is One Component per File
// this is done like this for tutorial purposes

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

/*  components are functions
    functions need to start with an uppercase letter
    also must return Markup
    can only return one element
*/
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Header component
function Header() {
  //   const style = {
  //     color: "#05C1FF",
  //     fontSize: "48px",
  //     textTransform: "uppercase",
  //   };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co</h1>
    </header>
  );
}

// Menu component
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  // check for length of array
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* if pizzas exist return the list, else return nothing */}
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {/* render each pizza object in the data */}
          {pizzas.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're working on our menu. Please come back later :)</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

// Pizza component
function Pizza(props) {
  console.log(props);
  // if a pizza is sold out return an empty object
  // if (props.pizzaObject.soldOut) {
  //   return null;
  // }
  return (
    <li className="pizza">
      <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <span>${props.pizzaObject.price + 3}</span>
      </div>
    </li>
  );
}

// Footer component
function Footer() {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // display an alert whether we are open or not
  //   if (hour >= openHour && hour <= closeHour) {
  //     alert("We're currently Open!");
  //   } else {
  //     alert("Sorry we're closed");
  //   }

  // if (!isOpen) {
  //   return (
  //     <p>
  //       We're happy to welcome you between {openHour}:00 and {closeHour}:00.
  //     </p>
  //   );
  // }
  return (
    <footer className="footer">
      {/* conditionally render if open */}
      {isOpen ? (
        <div className="order">
          <p>
            We're currently open until {closeHour}:00. Come visit us or order
            online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// Strict Mode components may be rendered twice
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
