import React, { useState } from "react";
import useBookContext from "../hooks/useBookContext";

export default function BookCreate() {
  const { onCreate } = useBookContext();
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div
      style={{
        top: "500px",
        position: "absolute",
      }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button onClick={handleSubmit}>Create </button>
      </form>
    </div>
  );
}
