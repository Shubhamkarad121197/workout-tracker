import { useState } from "react";
import { addWorkout } from "../globalStore";

export default function AddWorkout() {
  const [workoutName, setWorkoutName] = useState("");

  const handleAdd = () => {
    if (!workoutName.trim()) return;

    addWorkout({
      id: Date.now(),
      name: workoutName,
      date: new Date().toLocaleDateString()
    });

    setWorkoutName("");  // clear input
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        placeholder="Enter workout..."
        value={workoutName}
        onChange={(e) => setWorkoutName(e.target.value)}
      />
      <button onClick={handleAdd}>Add Workout</button>
    </div>
  );
}
