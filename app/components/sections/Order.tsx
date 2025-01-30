"use client";

const Order = () => {
  return (
    <>
      <section
        id="order"
        className="flex justify-center items-center h-screen bg-green-900"
      >
        <div className="flex justify-center items-center w-full">
          <button
            onClick={() => {
              window.open("https://utak.io/store/southsidebrews")!.focus();
            }}
            className="text-sageGreen text-6xl 2xl:text-8xl font-bold p-6 border-8 border-green-700 bg-green-800 rounded-lg shadow-xl uppercase tracking-widest hover:text-forestGreen"
          >
            Have a Coffee
          </button>
        </div>
      </section>
    </>
  );
};

export default Order;
