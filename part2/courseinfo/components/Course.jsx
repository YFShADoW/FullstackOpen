import React from 'react';

const Course = ({course}) =>{
    return (
      course.map((value) =>{
        return(
          <div key ={value.id}>
            <Header course={value.name} />
            <Content parts={value.parts} />
            <Total parts={value.parts} />
          </div>
        )
      })
  
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
          <Part key={value.id} name={value.name} exercises={value.exercises} />
        ))
    )
  };
  
  const Part = (props) =>{
    return React.createElement(
      'p',null,props.name, ':' , props.exercises
    )
  }
  
  const Total = ({parts}) =>{
    let total = parts.reduce((s,p)=>s + p.exercises , 0)
    return React.createElement(
      'p',null,'total of ', total , ' exercises'
    );
  };

export default Course;

