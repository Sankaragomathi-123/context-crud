import React, { useContext, useState } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/Book";

export default function BooksShow({ book, index }) {
  const { removeBooks } = useContext(BooksContext);
  const [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  if (showEdit) {
    return <BookEdit book={book} setShowEdit={setShowEdit} />;
  }
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <h4>{book.title} </h4>
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />

      <button onClick={handleShowEdit}>Edit </button>
      <button onClick={() => removeBooks(book.id)}>delete </button>
    </div>
  );
}
