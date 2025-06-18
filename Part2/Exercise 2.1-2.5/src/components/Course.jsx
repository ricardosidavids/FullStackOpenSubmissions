const Course = ({course}) => {
  return <div><h1>{course.name}</h1>
  <ul>
    {course.parts.map(entry => {
     return <li key={entry.id}>{entry.name}: {entry.exercises}</li>
  })}
  <Total course={course} />
  </ul>
  </div>
  
}
const Total = ({course}) =>{
 const total = course.parts.reduce(
  (sum, part) => sum+part.exercises, 0
 )
 return <h2>Total : {total}</h2>
}



export default Course