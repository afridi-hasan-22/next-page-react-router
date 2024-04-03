import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "./Book";
import LoadingSpinner from "./LoadingSpinner";

const Books = () => {
  const booksData = useLoaderData();
  const navigation = useNavigation();
  if(navigation.state === 'loading'){
    return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <div className="w-[95%] mx-auto px-4 py-16">
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {booksData.books.map((book) => (
          <Book key={book.isbn13} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
