import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import list from "../../public/list.json";
import Slider from "react-slick";
import Card from "./Card";
import axios from "axios";

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:4000/book/getBook");
        console.log(res.data);
        setBook(res.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log("error", error);
      }
    };
    getBook();
  }, []);

  //const filterData = list.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses </h1>
          <p>
            d scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was{" "}
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
