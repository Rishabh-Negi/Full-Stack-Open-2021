import React, { useState } from 'react'

const Button = ({ onTap, text }) => <button onClick={onTap}>{text}</button>
const Heading = ({ title }) => <h2>{title}</h2>

const Top = ({ votes, list }) => {
  var ar = votes
  var max = 0, index = 0
  for (var i = 0; i < ar.length; i++) {
    if (ar[i] > max) {
      max = ar[i]
      index = i
    }
  }
  return (
    <div>
      <div>{list[index]}</div>
      <div>has {votes[index]} votes</div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const points = [0, 0, 0, 0, 0, 0, 0]

  const [selected, setSelected] = useState(0)
  const [votes, addVote] = useState(points)

  const next = () => setSelected((selected + 1) % anecdotes.length)
  const vote = () => {
    const copy = [...votes]
    copy[selected]++
    addVote(copy)
  }

  return (
    <div>
      <Heading title="Anecdote of the day" />
      {anecdotes[selected]}
      <div>has {votes[selected]} votes</div>
      <div>
        <Button onTap={vote} text="vote" />
        <Button onTap={next} text="next anecdote" />
      </div>

      <Heading title="Anecdote with most votes" />
      <Top votes={votes} list={anecdotes} />
    </div>
  )
}

export default App