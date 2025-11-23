import { useState } from "react";
import { faqData } from "../constant/data";
import faqElicp from "../assets/FAQ/images/faqRightElipc.webp"
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
const FAQ = () => {
  
  const [openAccord, setOpenAccord] = useState(null);

  const handleFAQ = (index) => {
    if (openAccord === index) {
      setOpenAccord(null);
    } else {
      setOpenAccord(index);
    }
  };
  return (
    <div className="flex justify-center relative">

      <div className="container mx-auto flex flex-col gap-4 max-sm:px-5 sm:px-12 lg:px-20 md:py-10 relative z-50">
        <h2 className=" text-center font-bold uppercase">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="md:px-[10%] xl:px-[20%] flex flex-col gap-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-2 rounded-2xl border-muted py-1.5 px-2 cursor-pointer w-full"
              onClick={() => handleFAQ(index)
              }
            >
              <div className="flex gap-3 items-center">
                <div className="text-2xl flex items-center gap-2 w-full">
                  {openAccord === index ?
                    <div className=" bg-[#FFD9D9] gap-4  flex items-center w-full rounded-xl py-4 px-2 opacity-90">
                      <RiSubtractLine />
                      <h4 className="font-secondary w-full rounded-xl font-semibold text-secondary">{item.question}</h4>
                    </div>
                    :
                    <div className="  gap-4  flex items-center w-full rounded-xl py-4 px-2 opacity-90">
                      <IoMdAdd />
                      <h4 className="font-secondary w-full rounded-xl font-semibold text-secondary">{item.question}</h4>
                    </div>

                  }
                </div>

              </div>
              {openAccord === index && (
                <div>
                  <h6 className="font-secondary line-height-l text-light py-3 px-6">{item.answer}</h6>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <img src={faqElicp} alt="" className="absolute right-0 top-10 size-100 max-lg:size-64 max-lg:hidden z-1" />
    </div>
  );
};

export default FAQ;