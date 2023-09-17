import { useState } from 'react'

const Button = ({text, handleClick})=>{
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = (props) => {
  // ...
  const all = props.good+props.neutral+props.bad;
  const average = props.good+props.bad*(-1)/all;
  const positive = (props.good/all)*100;

  return(
    <>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </>
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
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App