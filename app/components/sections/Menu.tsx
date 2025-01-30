"use client";
import Image from "next/image";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface Props {
  menu: any;
}
const Menu = ({ menu }: Props) => {
  const [selected, setSelected] = useState("/Coffee.png");
  const [isFading, setIsFading] = useState<boolean>(false);
  const [isFadingAll, setIsFadingAll] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState(0);
  const [showCategories, setShowCategories] = useState(true);

  const handleCategorySelect = (index: number) => {
    setNextPage(index);
    setShowCategories(false);
  };

  const handleClick = (src: string) => {
    setIsFading(true);
    setTimeout(() => {
      setSelected(src);
      setIsFading(false);
    }, 300);
  };

  const handleLeft = () => {
    setIsFadingAll(true);
    setTimeout(() => {
      setNextPage(nextPage - 1);
      setSelected(`/${menu[nextPage - 1].category}.png`);
      setIsFadingAll(false);
    }, 300);
  };

  const handleRight = () => {
    setIsFadingAll(true);
    setTimeout(() => {
      setNextPage(nextPage + 1);
      setSelected(`/${menu[nextPage + 1].category}.png`);
      setIsFadingAll(false);
    }, 300);
  };

  return (
    <section id="menu" className="bg-sageGreen p-10 min-h-screen">
      {showCategories ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menu.map((category: any, index: number) => (
            <div
              key={category._id}
              className="cursor-pointer border-2 border-dustyRose p-5 rounded-lg hover:bg-mochaBrown transition duration-300"
              onClick={() => handleCategorySelect(index)}
            >
              <h3 className="text-2xl text-forestGreen font-semibold text-center">
                {category.category}
              </h3>
              <p className="text-sm text-forestGreen font-semibold text-center">
                {category.subCategory}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center pb-6">
            <div>
              <h1 className="text-5xl font-thin text-forestGreen">
                {menu[nextPage].category}
              </h1>
              <h2 className="text-lg md:text-2xl font-thin text-forestGreen">
                {menu[nextPage].subCategory}
              </h2>
            </div>

            <button
              className="text-xl text-earthyBrown underline"
              onClick={() => setShowCategories(true)}
            >
              Back to Categories
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div
              className={`transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"}`}
            >
              <Image
                src={selected}
                width={500}
                height={300}
                alt="Picture of a drink/food"
                className="rounded-xl"
              />
            </div>
            <ul className="space-y-4">
              {menu[nextPage].menuList.map(
                ({ _key, item, price, src }: any) => (
                  <li
                    key={_key}
                    className="p-4 border border-dustyRose rounded-lg cursor-pointer hover:bg-mochaBrown transition duration-300"
                    onClick={() => handleClick(src)}
                  >
                    <div className="flex justify-between">
                      <h3 className="text-2xl font-thin text-forestGreen">
                        {item}
                      </h3>
                      <h3 className="text-2xl font-thin text-forestGreen">
                        ₱{price}
                      </h3>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="flex justify-center pt-6">
            <MdChevronLeft
              className={`text-4xl cursor-pointer text-dustyRose duration-300 ${nextPage !== 0 ? "hover:opacity-100 opacity-50" : "opacity-0"}`}
              onClick={() => nextPage !== 0 && handleLeft()}
            />
            <MdChevronRight
              className={`text-4xl cursor-pointer text-dustyRose opacity-50 duration-300 ${nextPage + 1 !== menu.length ? "hover:opacity-100 opacity-50" : " opacity-0"}`}
              onClick={() => nextPage + 1 !== menu.length && handleRight()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
