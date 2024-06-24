import './App.css';
import CounterComponent from "./CounterComponent/CounterComponent";
import PockemonComponent from './PockemonComponent/PockemonComponent';
const number = 4;
const fname = "Atharva";
const lname = "Kasodekar";
const year= new Date().getFullYear() ;

function App() {
  return (
    <div className="App">
      {/* <div>
      <h1>List of my favourite</h1>
        <ul>
          <li>Bacon</li>
          <li>Jamon</li>
          <li>Noodles</li>
        </ul>
      </div>
      <div>
        <h1 contentEditable>Hello {fname} {lname}!</h1>
        <h1>Your lucky number is {number}</h1>
        <h1>Random Number {Math.floor(Math.random()*10)}</h1>
      </div>

      <div>
        <h2>Created By {`${fname}`}</h2>
        <h2>Copyright {`${year}`}</h2>
      </div> */}
      
      {/* <CounterComponent/> */}
      <PockemonComponent/>

    </div>
  );
}

export default App;
