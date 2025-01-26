"use client";

import next from "next";
import Image from "next/image";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
let item = [
  "Coffee",
  "Milk Tea",
  "Iced Tea",
  "Frappe",
  "Frappe",
  "Non-Coffee",
  "Dessert",
];
let drinkType = ["(Coffee-Based)", "(Non-Coffee)"];
let menu = [
  [
    { item: "Americano", price: "95.00", src: "/Coffee.png" },
    { item: "Cappucino", price: "115.00", src: "/Coffee.png" },
    { item: "Cafe Latte", price: "115.00", src: "/Coffee.png" },
    { item: "Mocha Latte", price: "125.00", src: "/Coffee.png" },
    { item: "White Mocha Latte", price: "125.00", src: "/Coffee.png" },
    { item: "Spanish Latte", price: "125.00", src: "/Coffee.png" },
    { item: "Hazelnut Latte", price: "125.00", src: "/Coffee.png" },
    { item: "Caramel Machiatto", price: "125.00", src: "/Coffee.png" },
    { item: "French Vanilla", price: "125.00", src: "/Coffee.png" },
  ],
  [
    { item: "Classic", price: "75.00", src: "/Milk Tea.png" },
    { item: "Wintermelon", price: "95.00", src: "/Milk Tea.png" },
    { item: "Okinawa", price: "110.00", src: "/Milk Tea.png" },
    { item: "Sapporo", price: "110.00", src: "/Milk Tea.png" },
    { item: "Matcha", price: "110.00", src: "/Milk Tea.png" },
  ],
  [
    { item: "Passionfruit", price: "110.00", src: "/" },
    { item: "Lychee", price: "110.00", src: "/" },
    { item: "Green Apple", price: "110.00", src: "/" },
  ],
  [
    { item: "Espresso", price: "125.00", src: "/" },
    { item: "Mocha", price: "135.00", src: "/" },
    { item: "Dark Mocha", price: "145.00", src: "/" },
    { item: "Hazelnut Espresso", price: "145.00", src: "/" },
    { item: "Java Chip", price: "145.00", src: "/" },
    { item: "White Mocha", price: "135.00", src: "/" },
  ],
  [
    { item: "White Chocolate", price: "145.00", src: "/" },
    { item: "Caramel", price: "145.00", src: "/" },
    { item: "Double Choco", price: "145.00", src: "/" },
    { item: "Strawberries & Cream", price: "145.00", src: "/" },
    { item: "Blueberries & Cream", price: "145.00", src: "/" },
    { item: "Matcha Cream", price: "145.00", src: "/" },
  ],
  [
    { item: "Steamed Milk", price: "75.00", src: "/" },
    { item: "Hot Choco", price: "95.00", src: "/" },
    { item: "Iced Choco", price: "110.00", src: "/" },
    { item: "Ube Latte", price: "110.00", src: "/" },
    { item: "Strawberry Latte", price: "110.00", src: "/" },
  ],
  [
    { item: "Chocolate Chip Cookie", price: "60.00", src: "/" },
    { item: "Red Velvet Cookie", price: "60.00", src: "/" },
    { item: "Oatmeal Cookie", price: "65.00", src: "/" },
    { item: "Double Choco Cookie", price: "65.00", src: "/" },
    { item: "Smores Cookie", price: "65.00", src: "/" },
    { item: "Choco Mallows Cookie", price: "65.00", src: "/" },
    { item: "Fudge Brownie", price: "65.00", src: "/" },
    { item: "Walnut Brownie", price: "75.00", src: "/" },
  ],
];
const Menu = () => {
  const [selected, setSelected] = useState("/Coffee.png");
  const [isFading, setIsFading] = useState<boolean>(false);
  const [isFadingAll, setIsFadingAll] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState(0);

  const handleClick = (src: string) => {
    setIsFading(true);
    setTimeout(() => {
      setSelected(src);
      setIsFading(false);
    }, 300);

    // console.log("Clicked item:", src);
  };
  const handleLeft = () => {
    setIsFadingAll(true);
    setTimeout(() => {
      setNextPage(nextPage - 1);
      {
        setSelected(`/${item[nextPage - 1]}.png`);
      }
      console.log("selected ", selected);
      setIsFadingAll(false);
    }, 300);
    // console.log("click:", nextPage);
  };
  const handleRight = () => {
    setIsFadingAll(true);
    setTimeout(() => {
      setNextPage(nextPage + 1);
      {
        setSelected(`/${item[nextPage + 1]}.png`);
      }
      setIsFadingAll(false);
    }, 300);
    // console.log("click:", nextPage);
    // console.log(menu.length);
  };

  return (
    <>
      <section id="menu" className={` bg-green-900 `}>
        <div
          className={`2xl:p-16 duration-300 ease-in-out ${
            isFadingAll ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* HEADER */}
          <div
            className={`flex justify-center 2xl:justify-start items-center text-5xl 2xl:text-8xl font-thin pt-10 2xl:ml-10 duration-300 ease-in-out `}
          >
            <h1 className={`text-cream `}>{item[nextPage]}</h1>
            <h2 className={`text-cream text-xl 2xl:text-4xl font-thin`}>
              {drinkType[4 - nextPage]}
            </h2>
          </div>

          {/* image and menu */}
          <div
            className={`2xl:flex 2xl:justify-between transition duration-300 ease-in-out`}
          >
            {/* IMAGE */}
            <div
              className={`p-10 flex justify-center transition-opacity duration-300 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src={`${selected}`}
                width={500}
                height={200}
                alt="Picture of a drink/food"
              ></Image>
            </div>
            {/* space */}
            <div></div>
            {/* MENU */}
            <ul
              className={`grid grid-cols-1 gap-4 items-center duration-300 ease-in-out 2xl:pr-24`}
            >
              {menu[nextPage].map(({ item, price, src }, idx) => (
                <li key={idx} className="border-b-2">
                  {/* container of name and price */}
                  <div
                    className="flex justify-between cursor-pointer hover:bg-forestGreen rounded-lg"
                    onClick={() => handleClick(src)}
                  >
                    {/* name */}
                    <div className="">
                      <h3
                        className={`text-xl md:text-2xl 2xl:text-4xl font-thin text-cream `}
                      >
                        {item}
                      </h3>
                    </div>
                    {/* price */}
                    <div>
                      <h3
                        className={`text-xl md:text-2xl 2xl:text-4xl font-thin text-cream mx-2`}
                      >
                        ₱{price}
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
              <div className="flex justify-center">
                <MdChevronLeft
                  className={`${
                    nextPage !== 0 &&
                    "opacity-50 cursor-pointer text-cream hover:opacity-100"
                  } `}
                  onClick={() => {
                    nextPage !== 0 && handleLeft();
                  }}
                  size={40}
                />
                <MdChevronRight
                  className={`${
                    nextPage + 1 !== menu.length &&
                    "opacity-50 cursor-pointer text-cream hover:opacity-100"
                  }`}
                  onClick={() => {
                    nextPage + 1 !== menu.length && handleRight();
                  }}
                  size={40}
                />
              </div>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
