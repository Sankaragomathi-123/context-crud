import { useContext } from "react";
import BooksContext from "../context/Book";

const useBookContext = () => {
  return useContext(BooksContext);
};
export default useBookContext;
