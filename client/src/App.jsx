import "./App.css";
import { WorkoutContainer } from "./components/WorkoutContainer";

export default function App() {
  const exercises = [
    {
      name: "Barbell Romanian Deadlift",
      sets: [
        {
          reps: 5,
          weight: 200,
        },
        {
          reps: 5,
          weight: 200,
        },
        {
          reps: 5,
          weight: 200,
        },
      ],
    },
  ];

  return <WorkoutContainer exercises={exercises} />;
}
