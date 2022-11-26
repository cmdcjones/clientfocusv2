import { WorkoutTitle } from "./WorkoutTitle";
import { ExerciseInfo } from "./ExerciseInfo";

export function WorkoutContainer({ exercises }) {
  return (
    <div className="max-w-sm max-h-lg min-h-screen mx-auto bg-white rounded-md shadow-lg md:max-w-xl">
      <div className="max-w-sm mx-auto bg-indigo-800 p-2 rounded-t-md md:max-w-xl">
        <p className="text-md font-medium text-white">Date: 12/12/2022</p>
      </div>
      <WorkoutTitle />
      <div className="divider"></div>
      <div className="min-h-300 p-4">
        <p className="text-indigo-300 font-medium text-md mb-2">Warm-up:</p>
        <p className="text-zinc-600 font-medium text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit
          maxime omnis minima architecto fuga atque, iusto quidem repudiandae
          sed obcaecati sapiente hic a corrupti iure eaque doloribus sunt sequi.
        </p>
      </div>
      <div className="divider"></div>
      <div className="min-h-300 p-4">
        <p className="text-indigo-300 font-medium text-md mb-2">Exercises:</p>
        <div className="flex min-w-64 gap-4 justify-center flex-wrap mb-4 md:justify-start">
          {/* TODO: add keys to createWorkout!*/}
          {exercises.map((exercise) => (
            <ExerciseInfo key={exercise.name} exercise={exercise} />
          ))}
        </div>
      </div>
      <div className="md:divider"></div>
      <div className="min-h-300 p-4">
        <p className="text-indigo-300 font-medium text-md mb-2">Cool down:</p>
        <p className="text-zinc-600 font-medium text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit
          maxime omnis minima architecto fuga atque, iusto quidem repudiandae
          sed obcaecati sapiente hic a corrupti iure eaque doloribus sunt sequi.
        </p>
      </div>
      <div className="divider"></div>
      <div className="min-h-300 p-4">
        <p className="text-indigo-300 font-medium text-md mb-2">Comments:</p>
        <p className="text-zinc-600 font-medium text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit
          maxime omnis minima architecto fuga atque, iusto quidem repudiandae
          sed obcaecati sapiente hic a corrupti iure eaque doloribus sunt sequi.
        </p>
      </div>
    </div>
  );
}
