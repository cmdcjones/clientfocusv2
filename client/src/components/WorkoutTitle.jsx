import { useState } from "react";

export function WorkoutTitle() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("saved");

  return (
    <div className="min-h-10 p-2 flex justify-center">
      {status == "saved" && title.length > 0 ? (
        <p
          className="text-black font-medium text-xl mt-2"
          onClick={() => {
            setStatus("editing");
            setTitle("");
          }}
        >
          {title}
        </p>
      ) : (
        <input
          type="text"
          className="text-black font-medium text-xl text-center mt-2"
          value={title}
          placeholder="Enter a workout title..."
          onFocus={() => setStatus("editing")}
          onBlur={() => setStatus("saved")}
          onChange={(e) => setTitle(e.target.value)}
        />
      )}
    </div>
  );
}
