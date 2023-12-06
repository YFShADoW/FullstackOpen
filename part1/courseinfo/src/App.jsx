import React from 'react'

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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

const Header = (props) =>{
  return React.createElement(
    'h1',null,props.course
  )
};
const Content = (props) =>{
  return (
      props.parts.map((value) => (
        <Part name={value.name} exercises={value.exercises} />
      ))
  )
};

const Part = (props) =>{
  return React.createElement(
    'p',null,props.name, ':' , props.exercises
  )
}

const Total = (props) =>{
  let total = 0
  props.parts.forEach(value =>{
    total += value.exercises
  })
  return React.createElement(
    'p',null,'Number of exercises: ', total
  );
};

export default App
