import React, { useState } from "react";
import { ScrollRecommend } from "../../logic";

const Proscroll = () => {
  const [index, setindex] = useState<number>(0);
  return (
    <section className="w-screen overflow-x-hidden ">
      <div className="w-full ">
        {ScrollRecommend.map((t, i) => {
          if (i === index) {
            return (
              <div key={i}>
                <div className="md:w-[1220px]  overflow-x-scroll flex bg-white md:py-3 md:px-5 md:h-[250px]  mx-10 rounded-xl">
                  <div className="w-[550px] h-[200px] border rounded-xl  md:px-3 md:py-2  text-left">
                    <div>
                      <img className="" src={t.image} alt="" />
                    </div>
                    <div>{t.about}</div>
                    <div>{t.amount}</div>
                  </div>
                  <div className="w-[550px] h-[200px] border rounded-xl  md:px-3 md:py-2  text-left">
                    <div>
                      <img src={t.image} alt="" />
                    </div>
                    <div>{t.about}</div>
                    <div>{t.amount}</div>
                  </div>
                  <div className="w-[550px] h-[200px] border rounded-xl  md:px-3 md:py-2 text-left">
                    <div>
                      <img src={t.image} alt="" />
                    </div>
                    <div>{t.about}</div>
                    <div>{t.amount}</div>
                  </div>
                  <div className="w-[550px] h-[200px] border rounded-xl  md:px-3 md:py-2  text-left">
                    <div>
                      <img src={t.image} alt="" />
                    </div>
                    <div>{t.about}</div>
                    <div>{t.amount}</div>
                  </div>
                  <div className="w-[550px] h-[200px] border rounded-xl  md:px-3 md:py-2  text-left">
                    <div>
                      <img src={t.image} alt="" />
                    </div>
                    <div>{t.about}</div>
                    <div>{t.amount}</div>
                  </div>
                  <div className="w-[550px] h-[200px] border rounded-xl  md:px-3 md:py-2  text-left">
                    <div>
                      <img src={t.image} alt="" />
                    </div>
                    <div>{t.about}</div>
                    <div>{t.amount}</div>
                  </div>
                  <div className="w-[550px] h-[200px] border rounded-xl  md:px-3 md:py-2  text-left">
                    <div>
                      <img src={t.image} alt="" />
                    </div>
                    <div>{t.about}</div>
                    <div>{t.amount}</div>
                  </div>
                  <div className="w-[550px] h-[200px] border rounded-xl  md:px-3 md:py-2  text-left">
                    <div>
                      <img src={t.image} alt="" />
                    </div>
                    <div>{t.about}</div>
                    <div>{t.amount}</div>
                  </div>
                  <div className="w-[550px] h-[200px] border rounded-xl  md:px-3 md:py-2  text-left">
                    <div>
                      <img src={t.image} alt="" />
                    </div>
                    <div>{t.about}</div>
                    <div>{t.amount}</div>
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

export default Proscroll;
