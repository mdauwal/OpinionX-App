import React from "react";
import './App.css'
import Entry from "./components/Entry";
import Emojipedia from "./components/Emojipedia";

function createEmoji (emojis) {
  return <Entry key={emojis.id} emoji={emojis.emoji} heading={emojis.name} subheading={emojis.meaning} />

}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emojipedia.map(createEmoji)}
      </dl>
    </div>
  );
}

export default App;
