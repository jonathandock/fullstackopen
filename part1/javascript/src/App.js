import React from 'react'

const Header = (props) => {
  console.log(props);
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => (
  <div>
    <Part name={props.part1.name} exercises={props.part1.exercises} />
    <Part name={props.part2.name} exercises={props.part2.exercises} />
    <Part name={props.part3.name} exercises={props.part3.exercises} />
  </div>
)

const Total = (props) => (
  <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
)

const Part = (props) => (
  <p>{props.name} {props.exercises}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
    </div>
  )
}

export default App