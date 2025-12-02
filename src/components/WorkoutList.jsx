import { useEffect, useState } from "react";
import { getState, subscribe } from "../globalStore";

export default function WorkoutList() {
  const [workouts, setWorkouts] = useState(getState().workouts);

  useEffect(() => {
    subscribe(() => {
      setWorkouts(getState().workouts);
    });
  }, []);

  return (
    <div>
      <h3>Workout Logs</h3>
      {workouts.length === 0 && <p>No workouts added yet</p>}

      <ul>
        {workouts.map(w => (
          <li key={w.id}>
            <strong>{w.name}</strong> — {w.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
