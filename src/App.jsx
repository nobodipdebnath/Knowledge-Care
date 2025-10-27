import { useState } from "react";
import "./App.css";
import { Blogs } from "./Components/Blogs/Blogs";
import { BookMarks } from "./Components/BookMarks/BookMarks";
import { Header } from "./Components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handelToAddBookMark = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  const handelMarkAsRead = (id, time) => {
    console.log(time);
    setReadingTime(readingTime + time);
    // Remove the read blog from book mark
    // console.log('remove Book Mark', {id})

    const remainingBookmarks = bookMarks.filter(
      (bookMark) => bookMark.id !== id
    );
    setBookMarks(remainingBookmarks);
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto mt-8">
        <Blogs
          handelToAddBookMark={handelToAddBookMark}
          handelMarkAsRead={handelMarkAsRead}
        ></Blogs>
        <BookMarks readingTime={readingTime} bookMarks={bookMarks}></BookMarks>
      </main>
    </>
  );
}

export default App;
