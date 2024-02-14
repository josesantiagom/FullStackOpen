import { useState } from 'react'

const Display = ({clicks}) => {
  return (
    <div>
      <p>Rojo: {clicks.red}</p>
      <p>Azul: {clicks.blue}</p>
      <p>Tota: {clicks.total}</p>
    </div>
)}

const Historic = ({all}) => {
  if (all.length === 0) {
    return (
      <div>
        <p>Presiona uno de los botones</p>
      </div>
    )
  } else {
    return (
      <div>
        <p>Histórico: {all.join(' ')}</p>
      </div>
  )}
}

const Button = ({onSmash, text}) => <button onClick={onSmash}>{text}</button>

const App = () => {
  const [clicks, setClicks] = useState({
    red: 0,
    blue: 0,
    all: [],
    total: 0
  })

  const handleRedClick = () =>  { 
    const newClicks = {
      blue: clicks.blue,
      red: clicks.red + 1,
      all: clicks.all.concat('R'),
      total: clicks.total + 1
    }

    setClicks(newClicks)
  }

  const handleBlueClick = () =>  { 
    const newClicks = {
      blue: clicks.blue + 1,
      red: clicks.red,
      all: clicks.all.concat('B'),
      total: clicks.total + 1
    }

    setClicks(newClicks)
  }

  const handleReset = () => {
    const newClicks = {
      blue: 0,
      red: 0,
      all: [],
      total: 0
    }
    
    setClicks(newClicks)
  }

  return (
    <>
      <Display clicks={clicks} />
      <Button onSmash={handleRedClick} text='Sumar al rojo' />
      <Button onSmash={handleBlueClick} text='Sumar al azul' />
      <Button onSmash={handleReset} text='Resetear ambos' />
      <Historic all={clicks.all} />
    </>
  )
}

export default App