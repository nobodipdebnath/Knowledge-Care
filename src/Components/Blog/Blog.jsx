import { FiBookmark } from "react-icons/fi";

export const Blog = ({ blog, handelToAddBookMark, handelMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mx-10 md:mx-0 mb-8">
      <img className="w-full rounded-lg mb-8" src={cover} alt="cover image" />
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img className="w-15 " src={author_img} alt="" />
          <div>
            <h4 className="text-2xl text-[#111111]  font-bold">{author}</h4>
            <p className="text-base font-semibold text-[#11111199]">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl text-[#11111199] font-medium">{reading_time} min read</span>
          <button
            onClick={() => handelToAddBookMark(blog)}
            className="
                cursor-pointer text-xl font-medium text-[#11111199]"
          >
            <FiBookmark></FiBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-[40px] font-bold text-[#111111] mt-4">{title}</h1>
      <p className="text-xl font-medium text-[#11111199] ">
        {hashtags.map((hash, idx) => (
          <span className="cursor-pointer hover:underline" key={idx}> #{hash}</span>
        ))}
      </p>
      <button
        onClick={() => handelMarkAsRead(id, reading_time)}
        className="text-[#6047EC] cursor-pointer text-xl font-semibold mt-5 hover:underline"
      >
        Mark As Read
      </button>
      <hr className="mt-8 text-[#1111111A]" />
    </div>
  );
};
