import React, { useEffect, useState } from "react";
import Card from "./Card";

import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:4000/book/getBook");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl ">
            We'are delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nobis
            optio eos quasi quidem magnam soluta sed natus, dicta, debitis
            distinctio ratione velit consequuntur. Mollitia!
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
          {/* 
{list.map((item) => (
            <Card key={item.id} item={item} />
          ))} */}
        </div>
      </div>
    </>
  );
}

export default Course;
