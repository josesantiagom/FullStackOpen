const Course = (prompt) => {
  return (
    <>
      <h1>{prompt.course}</h1>
    </>
  )
}

const Part = (prompt) => {
  return (
    <>
      <p>
        {prompt.part} {prompt.excercises}
      </p>
    </>
  )
}

const Content = (prompt) => {  
  return (
    <>
      <Part part={prompt.parts[0].name} excercises={prompt.parts[0].exercises} />
      <Part part={prompt.parts[1].name} excercises={prompt.parts[1].exercises} />
      <Part part={prompt.parts[2].name} excercises={prompt.parts[2].exercises} />
    </>
  )
}

const Total = (prompt) => {
  return (
    <>
      <p>
        Number of excercises {prompt.parts[0].exercises + prompt.parts[1].exercises + prompt.parts[2].exercises}
      </p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Course course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App