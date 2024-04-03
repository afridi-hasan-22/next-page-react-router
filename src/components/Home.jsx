import React from "react";
import { Link, useNavigation } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Lottie from "lottie-react";
import animation from '../assets/animation.json'
import LoadingSpinner from "./LoadingSpinner";

const Home = () => {
  const navigation = useNavigation();
  if(navigation.state === 'loading'){
    return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <div className="w-[95%] mx-auto px-8 py-16">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center">
        {/* left side start*/}
        <div className=" w-full lg:w-1/2 flex flex-col space-y-5 ">
          <span className="bg-yellow-300 w-20 rounded-2xl text-xs tracking-widest font-bold text-center">ON SALE!</span>
          <h1 className="text-4xl font-bold max-w-[90%]">A reader lives a <br />thousand lives <span className="text-blue-500">before he dies</span></h1>
          <p className="text-xl text-gray-400 max-w-[90%]">Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>
          <div className="flex space-x-6 items-center">
          <span className="btn text-white inline-flex space-x-3 items-center  font-bold px-5 py-3 rounded-md"><Link to='/books'>Visit Store</Link>
          <ShoppingCartIcon className="h-6 w-6 text-white"></ShoppingCartIcon>
          </span>
          <span className="font-bold text-gray-400 transition duration-200 hover:text-blue-700"><Link to='/about'>Learn More</Link></span>
          </div>
        </div>

        {/* right side start*/}

        <div className="w-full py-8 lg:py-0 lg:w-[40%] ">
        
        <Lottie  animationData={animation} loop={true} />

        </div>
      </div>
    </div>
  );
};

export default Home;
