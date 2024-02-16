import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Anecdote = ({text, anecdote, votes}) => (
  <div>
    <h1>{text}</h1>
    <p>{anecdote}</p>
    <p>has {votes} vote(s)</p>
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  //Array for votes
  const pointsInit = Array(anecdotes.length)
  pointsInit.fill(0)

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(pointsInit)
  const [mostVoted, setMostVoted]=useState(0)

  const handleNext = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const handleVote = () => {
    const copyPoints={... points}
    copyPoints[selected] +=1
    setPoints(copyPoints)

    //finds the biggest value
    var maxIndex = 0
    //object copyPoints its not iterable
    for (let [index,value] of Object.entries(copyPoints)) {
      maxIndex= value>copyPoints[maxIndex] ? index : maxIndex
    }

    setMostVoted(maxIndex)
  }

  return (
    <div>
      <Anecdote text="Anecdote of the day" anecdote={anecdotes[selected]} votes={points[selected]}/>
      <Button handleClick={handleVote} text='vote'/>
      <Button handleClick={handleNext} text='next anecdote'/>
      <Anecdote text="Anecdote with most votes" anecdote={anecdotes[mostVoted]} votes={points[mostVoted]}/>
    </div>
  )
}

export default App
