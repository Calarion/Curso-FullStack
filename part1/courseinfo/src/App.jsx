

const App = () => {
  
  const course = 'Half Stack application development'
  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a compnent', exercises: 14}]

    const Header = (props) => {
      return(
          <p>{props.course}</p> 
      )
    }

    const Content = (props) => {
      console.log(props)
      return (
        <div>
          <Part part={props.parts[0]}/>
          <Part part={props.parts[1]}/>
          <Part part={props.parts[2]}/>
        </div>
    
      )
    }

    const Part = (props) => {
      console.log
      return(
        <p>{props.part.name} {props.part.exercises}</p>
      )
    }
    const Total = (props) => {
      console.log(props)
      return (
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
      )
    }

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App