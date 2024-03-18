import { useContext, useEffect, useState } from "react";

import EditBook from "./EditBook";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
import BooksContext from "./context/Book";
import Accordion from "./components/Accordion";
import UserList from "./components/UserList";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  // const data = [
  //   { name: "John", age: 30, city: "New York" },
  //   { name: "Alice", age: 25, city: "San Francisco" },
  // ];
  // console.error("Error");
  // console.warn("Warning++");
  // console.info("This is an informational message.");
  // console.table(data);
  // console.group("Group 1");
  // console.log("Message 1");
  // console.log("Message 2");
  // console.groupEnd();
  // console.time("Timer");
  // console.timeEnd("Timer");
  // console.count("Counter");
  // console.count("Counter");
  // console.count("Another Counter");
  // console.clear();

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count, "RR");

    return () => {
      console.log("Clear", count);
    };
  }, [count]);

  const items = [
    {
      id: "l2kj5",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "lk2j35lkj",
      label: "Can I use Javascript on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "l1kj2i0g",
      label: "Can I use CSS on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
  ];

  return (
    <div style={{ position: "relative" }}>
      {/* <BookList />
      <BookCreate />
      <p>{count} </p>
      <button onClick={() => setCount(count + 1)}>Increment </button>
      <Accordion items={items} /> */}
      <UserList />
    </div>
  );
}

export default App;
