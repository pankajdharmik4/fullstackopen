import { useState } from 'react'

const Button = ({text, handleClick})=>{
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = (props) =>{
  return(
    <tr>
      <td>{props.text}</td>
      <td> {props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  // ...
  const all = props.good+props.neutral+props.bad;
  
  if(all === 0){
    return (
      <>
        <h1>statistics</h1>
      <p>No feedback given</p>  
      </>
    )
  }
  
  const average = props.good+props.bad*(-1)/all;
  const positive = (props.good/all)*100;


  return(
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good}/>
          <StatisticLine text="neutral" value={props.neutral}/>
          <StatisticLine text="bad" value={props.bad}/>
          <StatisticLine text="all" value={all}/>
          <StatisticLine text="average" value={average}/>
          <StatisticLine text="postive" value={positive}/>
        </tbody>
      </table>

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