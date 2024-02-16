import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Statistics = ({good, neutral, bad, all}) => {
  //Avoid divide by zero
  if (all!=0) return (
    <div>
    <p> good {good}</p>
    <p> neutral {neutral}</p>
    <p> bad {bad}</p>
    <p>average {(good-bad)/all}</p>
    <p>positive {good/all+'%'}</p>
    </div>);
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const handleGoodClick = () => setGood(good+1)

const handleNeutralClick = () => setNeutral(neutral+1)

const handleBadClick = () => setBad(bad+1)

  return (
    <div>
      <Header text='give feedback' />

      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>

      <Header text='statistics' />

      <Statistics good={good} neutral={neutral} bad={bad} all={good+neutral+bad}/>
      
    </div>
  )
}

export default App
