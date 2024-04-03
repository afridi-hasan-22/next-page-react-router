import React from "react";
import { useState } from "react";
import { Link, useLoaderData,useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const BookDetails = () => {
  const book = useLoaderData();
  const { title, price, image, authors, publisher, year, rating, desc, url } =
    book;
  const [fold, setfold] = useState(true);
  const navigation = useNavigation();
  console.log(navigation.state);

  if(navigation.state === 'loading'){
    return <LoadingSpinner></LoadingSpinner>
  }

  return (
    <div className="w-[70%] mx-auto py-16">
      <div className="w-full lg:flex justify-between items-center gap-6 border-2 border-gray-500 py-16 px-5">
        <div className="w-full lg:w-1/2">
          <img className="object-cover w-full " src={image} alt="" />
        </div>
        <div className=" w-full lg:w-1/2 text-left flex flex-col space-y-5">
          <span className="bg-yellow-300 w-20 rounded-2xl text-xs tracking-widest font-bold text-center uppercase">
            brand new!
          </span>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">{title}</h1>
          <div>
            <p className="font-semibold">Authors : {authors}</p>
            <p className="font-semibold">Publisher : {publisher}</p>
            <p className="font-semibold">Year : {year}</p>
            <p className="font-semibold">Rating : {rating}</p>
          </div>
         <div className="my-2">
         {fold ? (
            <>
              <p className="text-sm text-gray-400 mb-5">
                {desc.substring(0, 100)}... <span className="text-blue-500 font-semibold cursor-pointer" onClick={()=> setfold(false)}>Read More</span>
              </p>
            </>
          ) : (
            <>
            <p className="text-sm text-gray-400 mb-5">
                {desc}... <span className="text-blue-500 font-semibold cursor-pointer" onClick={()=> setfold(true)}>Read Less</span>
              </p>
            </>
          )}
         </div>
          <div className="flex space-x-6 items-center ">
            <span className="btn text-white inline-flex space-x-3 items-center  font-bold px-5 py-3 rounded-md">
              <Link to={url}>Buy Now</Link>
            </span>
            <span className="font-bold text-gray-400 transition duration-200 hover:text-blue-700">
              <Link to="/about">Learn More</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
