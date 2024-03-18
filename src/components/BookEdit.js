import React, { useContext, useState } from "react";
import BooksContext from "../context/Book";

export default function BookEdit({ book, setShowEdit }) {
  const { editBookById } = useContext(BooksContext);
  const [title, setTitle] = useState(book.title);

  const handleEditBooks = (e) => {
    e.preventDefault();
    setShowEdit(false);
    editBookById(book.id, title);
  };
  return (
    <div>
      <form onSubmit={handleEditBooks}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button onClick={handleEditBooks}>Edit </button>
      </form>
    </div>
  );
}
