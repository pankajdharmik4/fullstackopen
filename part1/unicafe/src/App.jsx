import { useState } from 'react'

const Button = ({text, handleClick})=>{
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGood = ()=>{
    setGood(good+1)
  }

  const handleNeutral = ()=>{
    setNeutral(neutral+1)
  }

  const handleBad = ()=>{
    setBad(bad+1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleGood}/>
      <Button text="neutral" handleClick={handleNeutral}/>
      <Button text="bad" handleClick={handleBad}/>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good+neutral+bad}</p>
      <p>average {(good+bad*(-1))/(good+neutral+bad)}</p>
      <p>positive {((good)/(good+neutral+bad))*100} %</p>
    </div>
  )
}

export default App