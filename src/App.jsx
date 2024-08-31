import React from "react";
import './App.css'
import Card from "./components/Card";
import Contact from "./components/Contact";

function App() {
  console.log(Contact)
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card name={Contact[0].name}
      phone={Contact[0].phone}
      email={Contact[0].email}
      img={Contact[0].imgURL}      
      />
      <Card name={Contact[1].name}
      phone={Contact[1].phone}
      email={Contact[1].email}
      img={Contact[1].imgURL}      
      />
      <Card name={Contact[2].name}
      phone={Contact[2].phone}
      email={Contact[2].email}
      img={Contact[2].imgURL}      
      />
    </div>
  );
}

export default App;
