import { useState } from "react";
import { Homeproduct } from "../../logic";
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa6";

const Product = () => {
  let [index, setindex] = useState<number>(0);
  return (
    <section className="md:w-full overflow-x-hidden ">
      <div className="md:w-full text-left md:h-[52px]  ">
        <h1 className="font-bold text-xl py-3 pl-5">Products</h1>
      </div>
      <div className="space-x-5 flex py-7 flex-row lg:flex overflow-x-scroll">
        <div>
          <button className="bg-[#222F3E] py-2 rounded-lg px-2">All</button>
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
      <div>
        {Homeproduct.map((t, i) => {
          if (i === index) {
            return (
              <div key={i}>
                <div className="w-full grid grid-cols-2 px-3 md:grid-cols-4 lg:grid-cols-6 gap-5 pt-5">
                  <div className="w-[240px] px-5 border rounded-lg h-[250px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-lg  flex items-center gap-x-4">
                      {t.amount}
                      <IconContext.Provider
                        value={{
                          color: "yellow",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <div>(4/5)</div>
                    </div>
                  </div>
                  <div className="w-[240px] px-5 border rounded-lg h-[250px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-lg  flex items-center gap-x-4">
                      {t.amount}
                      <IconContext.Provider
                        value={{
                          color: "yellow",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <div>(4/5)</div>
                    </div>
                  </div>
                  <div className="w-[240px] px-5 border rounded-lg h-[250px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-lg  flex items-center gap-x-4">
                      {t.amount}
                      <IconContext.Provider
                        value={{
                          color: "yellow",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <div>(4/5)</div>
                    </div>
                  </div>
                  <div className="w-[240px] px-5 border rounded-lg h-[250px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-lg  flex items-center gap-x-4">
                      {t.amount}
                      <IconContext.Provider
                        value={{
                          color: "yellow",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <div>(4/5)</div>
                    </div>
                  </div>
                  <div className="w-[240px] px-5 border rounded-lg h-[250px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-lg  flex items-center gap-x-4">
                      {t.amount}
                      <IconContext.Provider
                        value={{
                          color: "yellow",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <div>(4/5)</div>
                    </div>
                  </div>
                  <div className="w-[240px] px-5 border rounded-lg h-[250px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-lg  flex items-center gap-x-4">
                      {t.amount}
                      <IconContext.Provider
                        value={{
                          color: "yellow",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <div>(4/5)</div>
                    </div>
                  </div>
                  <div className="w-[240px] px-5 border rounded-lg h-[250px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-lg  flex items-center gap-x-4">
                      {t.amount}
                      <IconContext.Provider
                        value={{
                          color: "yellow",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <div>(4/5)</div>
                    </div>
                  </div>
                  <div className="w-[240px] px-5 border rounded-lg h-[250px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-lg  flex items-center gap-x-4">
                      {t.amount}
                      <IconContext.Provider
                        value={{
                          color: "yellow",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <div>(4/5)</div>
                    </div>
                  </div>
                  <div className="w-[240px] px-5 border rounded-lg h-[250px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-lg  flex items-center gap-x-4">
                      {t.amount}
                      <IconContext.Provider
                        value={{
                          color: "yellow",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <div>(4/5)</div>
                    </div>
                  </div>
                  <div className="w-[240px] px-5 border rounded-lg h-[250px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-lg  flex items-center gap-x-4">
                      {t.amount}
                      <IconContext.Provider
                        value={{
                          color: "yellow",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <div>(4/5)</div>
                    </div>
                  </div>
                  <div className="w-[240px] px-5 border rounded-lg h-[250px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-lg  flex items-center gap-x-4">
                      {t.amount}
                      <IconContext.Provider
                        value={{
                          color: "yellow",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <div>(4/5)</div>
                    </div>
                  </div>
                  <div className="w-[240px] px-5 border rounded-lg h-[250px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-lg  flex items-center gap-x-4">
                      {t.amount}
                      <IconContext.Provider
                        value={{
                          color: "yellow",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <div>(4/5)</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return <div className="hidden"></div>;
        })}
      </div>
    </section>
  );
};

export default Product;
