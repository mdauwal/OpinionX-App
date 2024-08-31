import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      
      <Contact fname="Beyonce" 
      phone="+234 56345 765"
      email="b@beyonce.com"
      imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      />
      <Contact fname="Collins" 
      phone="+234 1239 765"
      email="collenus@yahoo.com"
      imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      
      />
      <Contact fname="Chuck Norris" 
      phone="+234 56355 001"
      email="gmail@chucknorris.com"
      imgURL="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      
      />
    </div>
  )
}  
  

export default App;
