"use client";

const Order = () => {
  return (
    <>
      <section id="order" className="">
        <div className="flex justify-center bg-green-900 pb-10">
          <button
            onClick={() => {
              window.open("https://utak.io/store/southsidebrews")!.focus();
            }}
            className="text-sageGreen text-2xl 2xl:text-5xl font-thin rounded-lg hover:text-forestGreen p-2 border-4 border-green-700 bg-green-800"
          >
            Have a Coffee
          </button>
        </div>
      </section>
    </>
  );
};

export default Order;
