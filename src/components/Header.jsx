import React from "react";

const Header = ({ setShowCart, showCart, cartItems, setCartItems }) => {
  return (
    <nav className="sticky py-10 md:py-4 px-6 border-secondaryGrayishBlue border-opacity-30 border-b flex justify-between">
      {/* Links Part */}
      <div className="flex gap-16 lg:gap-10 ">
        <button className="self-center hidden md:block">
          <img src={require("../assets/images/icon-menu.svg").default} alt="" />
        </button>
        <img
          className="self-center "
          srcSet={require("../assets/images/logo.svg").default}
          alt=""
        />
        <ul className="flex gap-8 items-center md:hidden">
          {["Collections", "Men", "Women", "About", "Contact"].map(
            (item, idx) => (
              <li
                className="text-secondaryDarkGrayishBlue lg:text-sm"
                key={idx}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            )
          )}
        </ul>
      </div>
      {/* Cart and Avatar Part */}
      <div className="flex gap-10 md:gap-6 relative z-40 ">
        <button
          onClick={() => setShowCart((prev) => !prev)}
          className="relative"
        >
          <img
            srcSet={require("../assets/images/icon-cart.svg").default}
            alt=""
          />
          {cartItems.quantity ? (
            <div className="absolute rounded-full px-2 -top-0 md:-top-2 -right-2 bg-primaryOrange text-white font-bold text-[10px]">
              {cartItems.quantity}
            </div>
          ) : null}
        </button>
        <div>
          <img
            className="w-12 h-12 md:h-8 md:w-8"
            srcSet={require("../assets/images/image-avatar.png")}
            alt=""
          />
        </div>
        {showCart ? (
          <section className="flex flex-col w-96 bg-white shadow-2xl mb-10 rounded-lg absolute md:fixed xl:left-[-100px] lg:left-[-100px] md:left-[65%] sm:left-1/2 md:top-20 left-1/2 z-40 -translate-x-1/2 md:translate-0 md:-translate-1/2 top-16">
            <>
              <p className="p-6 border-x-secondaryLightGrayishBlue font-bold border-b">
                {" "}
                Cart
              </p>
              <div className="grid p-6 gap-6">
                {cartItems.quantity ? (
                  <>
                    <div className="flex items-end gap-4">
                      <img
                        className="w-14 h-14 rounded-lg"
                        srcSet={require("../assets/images/image-product-1-thumbnail.jpg")}
                        alt=""
                      />
                      <div className="pt-4">
                        <p className="text-secondaryDarkGrayishBlue">
                          Fall Limited Edition Sneakers
                        </p>
                        <p className="text-secondaryDarkGrayishBlue">
                          ${cartItems.price}.00 x{" "}
                          <span>{cartItems.quantity}</span>{" "}
                          <span className="font-bold text-black">
                            ${cartItems.quantity * cartItems.price}.00
                          </span>
                        </p>
                      </div>
                      {/* Delete */}
                      <button
                        className="self-center"
                        onClick={() =>
                          setCartItems({ ...cartItems, quantity: 0 })
                        }
                      >
                        <img
                          src={
                            require("../assets/images/icon-delete.svg").default
                          }
                        />
                      </button>
                    </div>
                    <button className="bg-primaryOrange rounded-lg py-4 text-white font-bold">
                      Checkout
                    </button>
                  </>
                ) : (
                  <p className="text-secondaryDarkGrayishBlue text-center p-14">
                    Your cart is empty.
                  </p>
                )}
              </div>
            </>
          </section>
        ) : null}
      </div>
    </nav>
  );
};

export default Header;
