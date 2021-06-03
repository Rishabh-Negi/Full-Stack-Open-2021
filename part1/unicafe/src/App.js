import React, { useState } from 'react'

const Button = ({ onPress, text }) => {
  return (<button onClick={onPress}>{text}</button>)
}

const Title = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  var all = good + neutral + bad;
  var avg = (good - bad) / all;
  var pos = (good * 100) / all;

  if (good === 0 && neutral === 0 && bad === 0)
    return (
      <div>No feedback given</div>
    )

  return (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={all} />
      <Statistic text="average" value={avg} />
      <Statistic text="positive" value={pos + " %"} />
    </div>
  )

}

const Statistic = ({ text, value }) => {
  return (
    <div>{text} {value}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text="give feedback" />
      <Button onPress={() => setGood(good + 1)} text="good" />
      <Button onPress={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onPress={() => setBad(bad + 1)} text="bad" />
      <Title text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App