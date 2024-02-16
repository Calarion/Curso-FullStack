import { useState } from 'react'

const Header = (props) =>  <h1>{props.text}</h1>

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatisticsLine = ({text, value}) => <tr><td>{text}</td><td align="right">{value}</td></tr>

const Statistics = ({good, neutral, bad, all}) => {
  // conditional redering
  if (all==0) return <p>No feedback given</p>;
  return (
    <table>
      <tbody>
        <StatisticsLine text='good' value={good}/>
        <StatisticsLine text='neutral' value={neutral}/>
        <StatisticsLine text='bad' value={bad}/>
        <StatisticsLine text='average' value={(good-bad)/all}/>
        <StatisticsLine text='positive' value={good/all*100 + '%'}/>
      </tbody>
    </table>);
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
      <Header text='give feedback'/>

      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>

      <Header text='statistics'/>
  
      <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad}/>
      
    </div>
  )
}

export default App
