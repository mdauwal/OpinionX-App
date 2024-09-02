// import React from "react";
// import './App.css'
// import Card from "./components/Card";
// import Contact from "./components/Contact";
// import Avatar from "./components/Avatar";
// import Footer from "./components/Footer"




// function createCard (contact) {
//   return <Card key={contact.id} name={contact.name} phone={contact.phone} email={contact.email} img={contact.imgURL}
//   />
  
// }

// function App() {
//   return (
//     <div>
//       <h1 className="heading">My Contacts</h1>
//       <Avatar img="https://media.licdn.com/dms/image/v2/D4D03AQH0IRkczMqlRw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719808985794?e=1730332800&v=beta&t=ZjbbBJ9gLjqg8HEHSQBr7xUwrJck9dPLUk30tfpvtvw" />
//       {Contact.map(createCard)}
//       <Footer />
//     </div>
//   );
// }

// export default App;


//CSS File
//body {
//     font-family: sans-serif;
//     margin: 0 auto;
//     padding: 25px;
//     max-width: 400px;
//     min-width: 400px;
//     background-color: #dfe6e9;
//     text-align: center;
//   }
  
//   .heading {
//     text-align: center;
//     font-size: 2em;
//     color: #2d3436;
//     margin: 20px 0 30px;
//   }
  
//   .card {
//     border-radius: 25px;
//     position: relative;
//     padding: 25px 15px;
//     background-color: #81ecec;
//     margin: 50px 0;
//     height: 200px;
//     box-shadow: 0 2px 5px #ccc;
//     text-align: left;
//   }
  
//   .top {
//     border-radius: 25px 25px 0 0;
//     height: 100px;
//     width: 100%;
//     background-color: #00cec9;
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: flex;
//   }
  
//   .name {
//     font-size: 2em;
//     color: #2d3436;
//     display: flex;
//     flex: 1;
//     margin: 10% 20px 0;
//   }
  
//   .card img {
//     position: absolute;
//     margin: 30px 20px 0 0;
//     right: 20px;
    
//   }
  
//   .circle-img {
//     border-radius: 50%;
//     border: 7px solid #fff;
//     width: 120px;
//     height: 120px;
//   }
  
//   .bottom {
//     margin-top: 120px;
//   }
  
//   .info {
//     margin: 20px 0;
//     color: #1a7e76;
//   }
  