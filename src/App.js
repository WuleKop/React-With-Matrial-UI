import React, { Component, Fragment } from 'react'
import {Header, Footer} from './Components/Layouts'
import Exercises from './Components/Exercises'
import {muscles, exercises } from './store.js'

//Can be export default class extends Component and ignore the final export statement
export class App extends Component {
  state = {
    exercises,
    exercise: {}
  }

  gtExerciseByMuscle(){
    return Object.entries (this.state.exercises.reduce((execr, exec)=> {
      const {muscles} = exec;
      execr[muscles] = execr[muscles] ? [...execr[muscles], exec] : [exec];
      return execr }, {}))
  }
  handleCategorySelected = category => {
    this.setState ({
      category
    })
  }
  handleExerciseSelected = id => {
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render() {
    const exercises = this.gtExerciseByMuscle(),
    {category, exercise} = this.state
    return (
      <Fragment>
        <Header/>
        <Exercises exercise={exercise} category = {category} exercises={exercises} onSelect = {this.handleExerciseSelected}/>
        <Footer 
        category={category}
        muscles ={muscles}
        onSelect = {this.handleCategorySelected}/>        
      </Fragment>
    )
  }
}

export default App
