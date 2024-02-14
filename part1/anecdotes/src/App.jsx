import { useState } from 'react'

const Title = ({text}) => <div><h1><p>{text}</p></h1></div>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Anecdote = ({anecdote}) => <p>{anecdote}</p>

const Votes = ({votes}) => <p>Has {votes} votes</p>

const Mostvoted = ({points, anecdotes}) => {
  const maximum = Math.max(... points)

  if (maximum > 0) {

    let maxQuote = ''
    
    let a, i = 0
      points.forEach( (point) => {
        if (point === maximum) {
          maxQuote = anecdotes[i]
          a = i
          i++
        } else {
          i = i + 1
        }
      }
    )

    return (
      <div>
        <p>{maxQuote}</p>
        <p>Has {points[a]} votes</p>
      </div>
    )
  } else {
    return (
      <p>No hay citas con votos</p>
    )
  }
}


function App() {
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

  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [selected, setSelected] = useState(0)

  const voteQuote = ({ points, selected }) => () => {
    let copy = [...points]
    copy[selected] = copy[selected] + 1
    /*console.log('Has votado la cita', selected, 'que tenía', points[selected], 'votos, y ahora tiene', points[selected]+1, 'votos')
    console.log(copy, 'seleccionado: ', copy[selected])*/

    setPoints(copy)
  }

  const handleRandomQuote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  return (
    <div>
      <Title text='Anecdote of the day' />
      <Anecdote anecdote={anecdotes[selected]} />
      <Votes votes={points[selected]} />
      <Button handleClick={voteQuote({ points, selected })} text='Vote' />
      <Button handleClick={handleRandomQuote} text='Next anecdote' />

      <Title text='Anecdote with most votes' />
      <Mostvoted points={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App