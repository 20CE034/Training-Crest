import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          console.log("i am first");
          onAddTask(text);
          console.log("i am last");
          setText("XYZ");
        }}
      >
        Add
      </button>
    </>
  );
}
