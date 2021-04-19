import React, {useState} from "react"
import QuoteCard from "./components/QuoteCard"
import './App.css';

const sampleSimpsonCharacter =  
{
  "quote": "By chilling my loins I increase the chances of impregnating my wife.",
  "character": "Apu Nahasapeemapetilon",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  "characterDirection": "Left"
  }

console.log(sampleSimpsonCharacter)

function App() {
  
  const [simpson, setSimpson] = useState(sampleSimpsonCharacter)  

  const getQuote = () => {
    fetch(`https://simpsons-quotes-api.herokuapp.com/quotes`)
    .then ((response) => response.json())    
    .then((result) => {
      console.log(result)    
      setSimpson(result[0])
    })
    
  }

  return (
    <div className="App">
      <QuoteCard simpson = {simpson} />
      <button type="button" onClick={getQuote}>New random quote</button>
    </div>
  );
}

export default App;