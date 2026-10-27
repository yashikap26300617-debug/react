import React from 'react'
import ProductCard, { Greet } from "./call.jsx";

function App() {
  return (
    <div>
      <h1>Hi, Harsshwadhan</h1>

      <ProductCard title="Wireless Headphones" price={99} />
      <ProductCard title="Mechanical Keyboard" price={149} />
      <ProductCard title="Ergonomic Mouse" price={45} />

      <Greet name="Harsshwardhan Chowdhary" squad={168} />
      <Greet name="Naman" squad={169} />
    </div>
  )
}

export default App
function Student(props) {
  return <h1>{props.name}</h1>;
}

function App() {
  return <Student name="Yashika" age={20} />;
}

Here:
// - name and age are props (prop names).
// - "Yashika" and 20 are their values.
// - Student receives them inside the props object.


// 1. What are Props?
// Props are data passed from one React component to another.
// 2. How to receive Props

// function ProfileCard({ name }) {
//   return <h2>{name}</h2>;
// }
// function Student(props) {
//   return <h1>{props.name}</h1>;
// }

// function App() {
//   return <Student name="Yashika" age={20} />;
// }


// Here:
// - name and age are props (prop names).
// - "Yashika" and 20 are their values.
// - Student receives them inside the props object.



