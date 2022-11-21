import "./App.css";

export default function App() {
  return (
    <div className="max-w-lg max-h-lg min-h-screen mx-auto bg-white rounded-md shadow-lg">
      <div className="max-w-lg mx-auto bg-indigo-800 p-2">
        <p className="text-md font-medium text-white">Date: 12/12/2022</p>
      </div>
      <div className="min-h-10 p-2">
        <p className="text-black font-medium text-xl text-center">
          Today's Workout
        </p>
      </div>
      <div
        id="divider"
        className="max-w-64 border-b-neutral-300 border-b-2 mx-auto mt-2  rounded-md"
      ></div>
      <div className="min-h-300 p-4">
        <p className="text-indigo-300 font-medium text-md mb-2">Warm-up:</p>
        <p className="text-zinc-600 font-medium text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit
          maxime omnis minima architecto fuga atque, iusto quidem repudiandae
          sed obcaecati sapiente hic a corrupti iure eaque doloribus sunt sequi.
        </p>
      </div>
      <div
        id="divider"
        className="max-w-64 border-b-neutral-300 border-b-2 mx-auto mt-2  rounded-md"
      ></div>
      <div className="min-h-300 p-4">
        <p className="text-indigo-300 font-medium text-md mb-2">Exercises:</p>
        <div className="flex min-w-64 gap-4 justify-center flex-wrap border- md:flex-nowrap">
          <h1 className="font-medium text-lg grow w-full text-center md:w-fit md:text-start">
            Bench Press
          </h1>
          <div className="flex flex-col items-center">
            <p className="font-bold">Set 1</p>
            <div className="flex gap-1 text-sm">
              <p>10</p>
              <span>x</span>
              <p>225lbs</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Set 2</p>
            <div className="flex gap-1 text-sm">
              <p>10</p>
              <span>x</span>
              <p>225lbs</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Set 3</p>
            <div className="flex gap-1 text-sm">
              <p>10</p>
              <span>x</span>
              <p>225lbs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
