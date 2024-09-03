import React from "react";
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Notes from "./components/Notes";
import Note from "./components/Note";

function App() {
  return (
    <div>
      <Header />
      {Notes.map( props => <Note key={props.id} title={props.title} content={props.content} />)}
      <Footer />

    </div>
  );
}

export default App;
