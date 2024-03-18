import { createContext, useCallback, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  }, []);

  const onCreate = async (title, index) => {
    // const updateState = [...books, { id: Math.random(), title: title }]; //ARRAY OF OBJECT
    // const updateState = [...books, title]; // ARRAY

    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedData = [...books, response?.data];
    setBooks(updatedData);
    console.log(response, "RES");
  };

  const editBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: title,
    });

    const updateBooks = books.map((book, index) => {
      if (book.id === id) {
        return { ...book, ...response?.data };
      }
      return book;
    });
    setBooks(updateBooks);
  };

  const removeBooks = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    const deleteBook = books.filter((book) => book.id !== id);
    setBooks(deleteBook);
  };

  console.log(books, "BOOKS");

  const valueToShare = {
    books,
    onCreate,
    editBookById,
    removeBooks,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };

export default BooksContext;
