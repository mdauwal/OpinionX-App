import React from "react";
import './App.css'
import Card from "./components/Card";
import Contact from "./components/Contact";
import Avatar from "./components/Avatar";
import Footer from "./components/Footer"

function App() {
  console.log(Contact)
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media.licdn.com/dms/image/v2/D4D03AQH0IRkczMqlRw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719808985794?e=1730332800&v=beta&t=ZjbbBJ9gLjqg8HEHSQBr7xUwrJck9dPLUk30tfpvtvw" />
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
      <Footer />
    </div>
  );
}

export default App;
