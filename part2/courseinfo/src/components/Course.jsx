const Part = ({course, exercises}) => <li>{course} {exercises}</li> 

const Header = ({name}) => <h1>{name}</h1>

const Content = ({content}) => {
  return (
    <ul>
        {content.map(curso => 
        <Part course={curso.name} exercises={curso.exercises} key={curso.id} />
        )}
    </ul>
  )
}

const Total = ({content}) => {
  const totalArr = content.map((curso) => curso.exercises)
  const totalSum = totalArr.reduce((total, sum) => total + sum, 0)

  return (
    <p><strong>Total of {totalSum} excercises</strong></p>
  )

}

const Course = ({course}) => {
  return(
    <div key={course.key}>
      <Header name={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts} />
    </div>
   )
}

export default Course