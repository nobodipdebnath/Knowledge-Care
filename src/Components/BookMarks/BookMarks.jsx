import React from "react";
import { BookMark } from "../BookMark/BookMark";

export const BookMarks = ({ bookMarks, readingTime }) => {
  return (
    <div className="md:w-1/3 mx-4 lg:ml-6 flex flex-col gap-8 pt-4 rounded-xl">
      <div className="px-12 py-6 bg-[#6047ec1a] border border-[#6047ec] rounded-lg">
        <h3 className="text-2xl text-[#6047ec] font-bold">Reading Time : {readingTime} min</h3>
      </div>
      <div className="bg-gray-200 p-7.5 rounded-xl">
        <h1 className="text-2xl font-bold text-[#111111] text-center">
          Book Marked Blogs: {bookMarks.length}
        </h1>
        {bookMarks.map((bookMark, idx) => (
          <BookMark key={idx} bookMark={bookMark}></BookMark>
        ))}
      </div>
    </div>
  );
};
