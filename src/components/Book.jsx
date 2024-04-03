import React from "react";
import { Link, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Book = ({ book }) => {
  const { title, price, image, isbn13, subtitle } = book;
  
  return (
    <Link to={`/book/${isbn13}`} className="w-full overflow-hidden relative transition duration-300 transform hover:-translate-y-2">
      <img
        className="object-cover w-full h-56 md:h-64 xl:h-80"
        src={image}
        alt=""
      />
      <div className="bg-black text-white bg-opacity-75 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 flex flex-col px-6 py-4">
        <p>{title}</p> <br />
        <p>{subtitle.substring(0,50)}...</p> <br />
        <p className="mt-auto">Price : {price}</p>
      </div>
    </Link>
  );
};

export default Book;
