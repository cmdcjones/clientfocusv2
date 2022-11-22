import "./App.css";

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

  return (
    <div className="max-w-sm max-h-lg min-h-screen mx-auto bg-white rounded-md shadow-lg md:max-w-xl">
      <div className="max-w-sm mx-auto bg-indigo-800 p-2 rounded-t-md md:max-w-xl">
        <p className="text-md font-medium text-white">Date: 12/12/2022</p>
      </div>
      <div className="min-h-10 p-2">
        <p className="text-black font-medium text-xl text-center mt-2">
          Today's Workout
        </p>
      </div>
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
        <div className="flex min-w-64 gap-4 justify-center flex-wrap mb-4 md:flex-nowrap md:justify-start">
          {/* TODO: add keys */}
          {exercises.map((exercise) => (
            <>
              <h1 className="font-medium text-lg grow w-full text-center md:max-w-48 md:text-start">
                {exercise.name}
              </h1>
              <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
                {exercise.sets.map((set, setNumber) => (
                  <div className="flex flex-col items-center">
                    <p className="font-bold">Set {setNumber + 1}</p>
                    <div>
                      <p className="text-sm">
                        {set.reps} reps x {set.weight}lbs
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
