import React, { useState } from "react";

function EditBook({ editBookById, book, setShowEdit }) {
  const [title, setTitle] = useState(book.title);
  
  const handleSubmitEdit = () => {
    setShowEdit(false);
    editBookById(title, book.id);
  };
  return (
    <div>
      <form onSubmit={handleSubmitEdit}>
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={handleSubmitEdit}> Save</button>
      </form>
    </div>
  );
}

export default EditBook;
