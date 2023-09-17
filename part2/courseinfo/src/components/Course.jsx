
const Header = (props)=>{
    console.log(props)
    return(
      <h2>{props.course.name}</h2>
    )
  }
  
  const Content = ({parts})=>{
    console.log(parts)
    return(
      <>
      {parts.map((part) => <Part key={part.id} part={part}/>)}
      </>
    )
  }
  
  const Part = ({part}) =>{
    return(
      <p>{part.name} {part.exercises}</p>
    )
  }
  
  const Total = ({parts})=>{
    const sumx = parts.reduce((sum,part)=> sum+ part.exercises,0 )
    return(
      <>
        <strong>Total of {sumx} exercises</strong>
      </>
    )
  }
  
  const Course = ({course})=>{
    return(
    <>
        <Header course = {course}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </>)
  }

  export default Course;