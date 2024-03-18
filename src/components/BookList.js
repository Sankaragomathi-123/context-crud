import React, { useContext } from "react";
import BooksShow from "./BooksShow";
import BooksContext from "../context/Book";

export default function BookList() {
  const { books } = useContext(BooksContext);
  const renderedBooks = books.map((book, index) => {
    return <BooksShow key={index} book={book} index={index} />;
  });
  return <div>{renderedBooks}</div>;
}
