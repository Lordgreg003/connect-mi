import { useState } from "react";
import { HomeRecommend } from "../../logic";
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa6";

const Recommend = () => {
  let [index, setindex] = useState<number>(0);
  return (
    <section className="overflow-x-hidden w-full  ">
      <div className="md:w-full text-left md:h-[52px]  ">
        <h1 className="font-bold text-xl py-3 pl-5">Recommends</h1>
      </div>
      <div className="w-full ">
        {HomeRecommend.map((t, i) => {
          if (i === index) {
            return (
              <div key={i}>
                <div className="flex flex-row overflow-x-scroll space-x-5 py-5 ">
                  <div className="w-[240px] space-y-3 px-5 border rounded-lg h-[250px] whitespace-normal text-left  ">
                    <img className="w-fit" src={t.image} alt="" />
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
                  {/* 2nd */}
                  <div className="w-[240px] space-y-3 px-5 border rounded-lg h-[250px] whitespace-normal text-left  ">
                    <img className="w-fit" src={t.image} alt="" />
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
                  {/* 3rd */}
                  <div className="w-[240px] space-y-3 px-5 border rounded-lg h-[250px] whitespace-normal text-left  ">
                    <img className="w-fit" src={t.image} alt="" />
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
                  {/* 4th */}
                  <div className="w-[240px] space-y-3 px-5 border rounded-lg h-[250px] whitespace-normal text-left  ">
                    <img className="w-fit" src={t.image} alt="" />
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
                  {/* 5th */}
                  <div className="w-[240px] space-y-3 px-5 border rounded-lg h-[250px] whitespace-normal text-left  ">
                    <img className="w-fit" src={t.image} alt="" />
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
                  {/* 6th */}
                  <div className="w-[240px] space-y-3 px-5 border rounded-lg h-[250px] whitespace-normal text-left  ">
                    <img className="w-fit" src={t.image} alt="" />
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
                  {/* 7th */}
                  <div className="w-[240px] space-y-3 px-5 border rounded-lg h-[250px] whitespace-normal text-left  ">
                    <img className="w-fit" src={t.image} alt="" />
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
                  {/* 8th */}
                  <div className="w-[240px] space-y-3 px-5 border rounded-lg h-[250px] whitespace-normal text-left  ">
                    <img className="w-fit" src={t.image} alt="" />
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
                  {/* 9th */}
                  <div className="w-[240px] space-y-3 px-5 border rounded-lg h-[250px] whitespace-normal text-left  ">
                    <img className="w-fit" src={t.image} alt="" />
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
                  {/* 10th */}
                  <div className="w-[240px] space-y-3 px-5 border rounded-lg h-[250px] whitespace-normal text-left ">
                    <img className="w-fit" src={t.image} alt="" />
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
                  {/* 11th */}
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

export default Recommend;
