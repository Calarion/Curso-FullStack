
const Part = ({id, name}) => {
    return (
        <li>{name}</li>
    )
}

const Course = ({course}) => {
    return (
        <div key={course.id}>
            <h2>{course.name}</h2> 
            {course.parts.map( part => 
            <Part key={part.id} name={part.name}/>
            )}
            <h3>Total of exercises {course.parts.reduce((total, part) => total + part.exercises, 0)}</h3>
        </div>)
  }
  
  export default Course

