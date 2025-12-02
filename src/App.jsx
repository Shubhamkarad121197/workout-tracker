import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddWorkout from './components/addWorkout'
import WorkoutList from './components/WorkoutList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{padding:"20px"}}>
      <h2>💪 Workout Tracker App</h2>
      <AddWorkout/>
      <WorkoutList/>
    </div>
      
    </>
  )
}

export default App
