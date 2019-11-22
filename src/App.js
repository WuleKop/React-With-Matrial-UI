import React, { Component, Fragment } from 'react'
import {Header, Footer} from './Components/Layouts'
import Exercises from './Components/Exercises'
import {muscles, exercises } from './store.js'

//Can be export default class extends Component and ignore the final export statement
export class App extends Component {
  state = {
    exercises
  }

  gtExerciseByMuscle(){
    return this.state.exercises

  }

  render() {
    console.log(this.gtExerciseByMuscle())
    return (
      <Fragment>
        <Header/>
        <Exercises exercises={exercises}/>
        <Footer muscles ={muscles}/>        
      </Fragment>
    )
  }
}

export default App
