import { useState } from 'react'

const Title = ({text}) => <div><h1><p>{text}</p></h1></div>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({text, value}) => {
    if (text === 'Positive') {
      return (
        <tr>
          <td>{text}</td>
          <td>{value} %</td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      )
    }
    
    }

const Statistics = ({feedback}) => {
  if (feedback.all === 0) {
    return (
      <div><p>No feedback given</p></div>
    )
  } else {
    return(
      <div>
        <table>
          <tbody>
            <StatisticLine text='Good' value={feedback.good} />
            <StatisticLine text='Neutral' value={feedback.neutral} />
            <StatisticLine text='Bad' value={feedback.bad} />
            <StatisticLine text='All' value={feedback.all} />
            <StatisticLine text='Average' value={feedback.average} />
            <StatisticLine text='Positive' value={feedback.positive} />
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0
  })

  const handleGood = () => {
    const newFeedback = {
      good: feedback.good + 1,
      neutral: feedback.neutral,
      bad: feedback.bad,
      all: feedback.all + 1,
      average: ((feedback.good + 1) - feedback.bad) / (feedback.all + 1),
      positive: ((feedback.good + 1) * 100) / (feedback.all + 1)
    }

    setFeedback(newFeedback)
  }

  const handleNeutral = () => {
    const newFeedback = {
      good: feedback.good,
      neutral: feedback.neutral + 1,
      bad: feedback.bad,
      all: feedback.all + 1,
      average: (feedback.good - feedback.bad) / (feedback.all + 1),
      positive: (feedback.good * 100) / (feedback.all + 1)
    }

    setFeedback(newFeedback)
  }

  const handleBad = () => {
    const newFeedback = {
      good: feedback.good,
      neutral: feedback.neutral,
      bad: feedback.bad +1,
      all: feedback.all + 1,
      average: (feedback.good - (feedback.bad + 1)) / (feedback.all + 1),
      positive: (feedback.good * 100) / (feedback.all + 1)
    }

    setFeedback(newFeedback)
  }

  return (
    <>
      <Title text='Give feedback' />
      <p>
        <Button handleClick={handleGood} text="good" />
        <Button handleClick={handleNeutral} text="neutral" />
        <Button handleClick={handleBad} text="bad" />
      </p>
      <Title text='Statistics' />
      <Statistics feedback={feedback} />
    </>
  )
}

export default App