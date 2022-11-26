export function ExerciseInfo({ exercise }) {
  return (
    <div className="w-full md:flex  md:place-content-between">
      <h1 className="font-medium text-lg text-center md:max-w-36 md:text-start">
        {exercise.name}
      </h1>
      <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4 md:flex-end md:min-w-[325px]">
        {exercise.sets.map((set, setNumber) => (
          <div key={exercise.sets.set} className="flex flex-col items-center">
            <p className="font-bold">Set {setNumber + 1}</p>
            <div>
              <p className="text-sm">
                {set.reps} reps | {set.weight}lbs
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="divider mt-4 md:hidden"></div>
    </div>
  );
}
