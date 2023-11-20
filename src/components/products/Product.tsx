import React from "react";
import { useState } from "react";
import { Homeproduct } from "../../logic";
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa6";

const Product = () => {
  let [index, setindex] = useState<number>(0);
  return (
    <section>
      {" "}
      <div>
        {Homeproduct.map((t, i) => {
          if (i === index) {
            return (
              <div key={i}>
                <div className="w-full    grid grid-cols-2 px-3 md:grid-cols-4 lg:grid-cols-6 gap-5 pt-5">
                  <div className="w-[240px] px-5 border rounded-lg h-[280px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-white px-2 w-24 whitespace-nowrap bg-red-700">
                      Hot sales{" "}
                    </div>
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
                  <div className="w-[240px] px-5 border rounded-lg h-[280px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-white px-2 w-24 whitespace-nowrap bg-red-700">
                      Hot sales{" "}
                    </div>
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
                  <div className="w-[240px] px-5 border rounded-lg h-[280px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-white px-2 w-24 whitespace-nowrap bg-red-700">
                      Hot sales{" "}
                    </div>
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
                  <div className="w-[240px] px-5 border rounded-lg h-[280px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-white px-2 w-24 whitespace-nowrap bg-red-700">
                      Hot sales{" "}
                    </div>
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
                  <div className="w-[240px] px-5 border rounded-lg h-[280px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-white px-2 w-24 whitespace-nowrap bg-red-700">
                      Hot sales{" "}
                    </div>
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
                  <div className="w-[240px] px-5 border rounded-lg h-[280px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-white px-2 w-24 whitespace-nowrap bg-red-700">
                      Hot sales{" "}
                    </div>
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
                  <div className="w-[240px] px-5 border rounded-lg h-[280px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-white px-2 w-24 whitespace-nowrap bg-red-700">
                      Hot sales{" "}
                    </div>
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
                  <div className="w-[240px] px-5 border rounded-lg h-[280px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-white px-2 w-24 whitespace-nowrap bg-red-700">
                      Hot sales{" "}
                    </div>
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
                  <div className="w-[240px] px-5 border rounded-lg h-[280px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-white px-2 w-24 whitespace-nowrap bg-red-700">
                      Hot sales{" "}
                    </div>
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
                  <div className="w-[240px] px-5 border rounded-lg h-[280px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-white px-2 w-24 whitespace-nowrap bg-red-700">
                      Hot sales{" "}
                    </div>
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
                  <div className="w-[240px] px-5 border rounded-lg h-[280px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-white px-2 w-24 whitespace-nowrap bg-red-700">
                      Hot sales{" "}
                    </div>
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
                  <div className="w-[240px] px-5 border rounded-lg h-[280px] whitespace-normal text-left bg-white">
                    <img className="w-fit pt-2" src={t.image} alt="" />
                    <div>{t.about}</div>
                    <div className="text-white px-2 w-24 whitespace-nowrap bg-red-700">
                      Hot sales{" "}
                    </div>
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
