import React, { useState } from "react";

const Main = ({ counter, setCounter, addToCart, showCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mainPicture, setMainPicture] = useState(1);

  return (
    <main className="h-[78vh] mt-20 md:mt-0">
      <div className="grid grid-cols-2 md:grid-cols-1">
        {/* Image section */}
        <section className="flex flex-col md:grid gap-8 px-10 md:px-0 ">
          <div style={{ position: showCart ? "static" : "relative" }}>
            <img
              className="md:h-80 object-cover object-center md:w-full rounded-2xl cursor-pointer md:cursor-auto md:rounded-none"
              onClick={() => setIsOpen(true)}
              srcSet={require(`../assets/images/image-product-${mainPicture}.jpg`)}
              alt=""
            />
            <button
              style={{ display: showCart ? "none" : null }}
              className="group hidden md:block md:absolute top-1/2 -translate-y-1/2 left-2 bg-white rounded-full p-3"
              onClick={() => {
                if (mainPicture === 1) {
                  setMainPicture(4);
                } else {
                  setMainPicture(mainPicture - 1);
                }
              }}
            >
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="group-hover:stroke-primaryOrange md:h-14"
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            <button
              style={{ display: showCart ? "none" : null }}
              className="group hidden md:block absolute top-1/2 -translate-y-1/2 right-2 bg-white rounded-full p-3"
              onClick={() => {
                if (mainPicture === 4) {
                  setMainPicture(1);
                } else {
                  setMainPicture(mainPicture + 1);
                }
              }}
            >
              <svg
                className="translate-x-1"
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:stroke-primaryOrange"
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                />
              </svg>
            </button>
          </div>

          <div className="flex w-full lg:gap-6 justify-between md:hidden ">
            {Array(4)
              .fill("")
              .map((item, idx) => (
                <img
                  onClick={() => setMainPicture(idx + 1)}
                  className={`w-20 lg:h-full lg:w-full h-20 rounded-lg hover:opacity-50 ${
                    idx + 1 === mainPicture
                      ? "border-[3px] border-primaryOrange opacity-60"
                      : ""
                  }`}
                  srcSet={require(`../assets/images/image-product-${
                    idx + 1
                  }-thumbnail.jpg`)}
                />
              ))}
          </div>
        </section>
        {/* Product Info section */}
        <section className="p-10 md:p-6">
          <h4 className="text-primaryOrange font-bold uppercase text-sm  tracking-widest">
            Sneaker Company
          </h4>
          <h1 className="text-5xl md:text-2xl lg:text-3xl md:pr-10 font-bold pt-5 md:pt-3">
            Fall Limited Edition Sneakers
          </h1>
          <p className="pt-10 lg:pt-6 md:pt-4 md:text-sm md:leading-normal text-secondaryDarkGrayishBlue">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          {/* Price Section */}
          <div className="pt-6 md:flex md:justify-between">
            <div className="flex gap-4 items-center">
              <p className="text-3xl font-bold">$125.00</p>
              <p className="bg-primaryPaleOrange rounded-md px-2 text-primaryOrange font-bold">
                50%
              </p>
            </div>
            <p className="text-secondaryDarkGrayishBlue md:text-sm font-bold opacity-50 line-through pt-2">
              $250.00
            </p>
          </div>
          <div className="flex  justify-between md:flex-col gap-4 md:gap-3 mt-10 md:mt-4 lg:flex-col">
            {/* Counter */}
            <div className="flex flex-1 bg-secondaryLightGrayishBlue md:justify-around justify-between rounded-xl p-4">
              <button
                onClick={() => {
                  if (counter === 0) return;
                  setCounter(counter - 1);
                }}
              >
                <img
                  src={require("../assets/images/icon-minus.svg").default}
                  alt=""
                />
              </button>
              <p className="font-bold">{counter}</p>

              <button onClick={() => setCounter(counter + 1)}>
                <img
                  src={require("../assets/images/icon-plus.svg").default}
                  alt=""
                />
              </button>
            </div>
            {/* Add To Cart */}
            <button
              className="flex flex-1 lg:py-4 items-center justify-center hover:opacity-80 shadow-2xl shadow-primaryOrange gap-4 text-white bg-primaryOrange px-14 rounded-xl"
              onClick={() => addToCart()}
            >
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-white"
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill-rule="nonzero"
                />
              </svg>
              <p className="font-bold">Add to cart</p>
            </button>
          </div>
        </section>
      </div>
      {isOpen ? (
        <div className="fixed md:hidden inset-0 bg-[rgba(0,0,0,0.7)] w-[100vw] h-[100vh]">
          <div className="relative h-[600px] w-[600px] mx-auto translate-y-28 grid">
            <button
              className="justify-self-end mb-4 scale-125 group"
              onClick={() => setIsOpen(false)}
            >
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="group-hover:fill-primaryOrange"
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#69707D"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            <div className="relative">
              <img
                className=" rounded-2xl"
                srcSet={require(`../assets/images/image-product-${mainPicture}.jpg`)}
                alt=""
              />

              <button
                className="group absolute top-1/2 -translate-y-1/2 -left-6 bg-white rounded-full p-5"
                onClick={() => {
                  if (mainPicture === 1) {
                    setMainPicture(4);
                  } else {
                    setMainPicture(mainPicture - 1);
                  }
                }}
              >
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="group-hover:stroke-primaryOrange"
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
              <button
                className="group absolute top-1/2 -translate-y-1/2 -right-6 bg-white rounded-full p-5"
                onClick={() => {
                  if (mainPicture === 4) {
                    setMainPicture(1);
                  } else {
                    setMainPicture(mainPicture + 1);
                  }
                }}
              >
                <svg
                  className="translate-x-1"
                  width="18"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-primaryOrange"
                    d="m2 1 8 8-8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-center gap-8 mt-10 ">
              {Array(4)
                .fill("")
                .map((item, idx) => (
                  <img
                    onClick={() => setMainPicture(idx + 1)}
                    className={`w-20 h-20 rounded-lg hover:opacity-60 ${
                      idx + 1 === mainPicture
                        ? "border-[3px] border-primaryOrange opacity-60"
                        : ""
                    }`}
                    srcSet={require(`../assets/images/image-product-${
                      idx + 1
                    }-thumbnail.jpg`)}
                  />
                ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default Main;
