import React from "react";

const Service = () => {
  return (
    <section className="md:w-full overflow-x-hidden ">
      {" "}
      <div className="md:w-full text-left md:h-[52px]  ">
        <h1 className="font-bold text-xl py-3 pl-5">Products</h1>
      </div>
      <div className="space-x-5 flex py-7 flex-row lg:flex overflow-x-scroll">
        <div>
          <button className="bg-[#EE8625] py-2 rounded-lg px-2">All</button>
        </div>
        <div>
          <button className="bg-[#E0E0E0] py-2 px-2 rounded-lg">
            Electronics
          </button>
        </div>
        <div>
          <button className="bg-[#E0E0E0] whitespace-nowrap  py-2 px-2 rounded-lg">
            Fashion and Clothing
          </button>
        </div>
        <div>
          <button className="bg-[#E0E0E0] whitespace-nowrap py-2 px-2 rounded-lg">
            Home and Kitchen Appliances{" "}
          </button>
        </div>
        <div>
          {" "}
          <button className="bg-[#E0E0E0] whitespace-nowrap py-2 px-2 rounded-lg">
            Beauty and Personal Care
          </button>
        </div>
        <div>
          <button className="bg-[#E0E0E0] whitespace-nowrap py-2 px-2 rounded-lg">
            Health and Fitness
          </button>
        </div>
        <div>
          <button className="bg-[#E0E0E0] whitespace-nowrap py-2 px-2 rounded-lg">
            Book and Stationary
          </button>
        </div>
        <div>
          <button className="bg-[#E0E0E0] whitespace-nowrap py-2 px-2 rounded-lg">
            ...More Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
