
import { useState } from "react";
import AccordionItem2 from "./AccordionItem2";

const AccordionItems = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  const accordionData = [
    {
      title: "Is it safe to invest in cryptocurrency?",
      desc: "Cryptocurrency is a good investment if you want to gain direct exposure to the demand for digital currency.",
    },
    {
      title: "When can i withdraw my investment returns?",
      desc: "Investment proceeds can be withdrawn anytime, go to the withdrawal page of the portal to request withdrawal of funds. it's fast, safe and easy.",
    },
    {
      title: "Do i need a special advive to get the most out of this platform?",
      desc: "No, any internet enabled device is good enough to access our trading platform and facilities worldwide.",
    },
  ];
  return (
    <div className="bg-[#1A1AFF] mt-[10%] grid place-items-center">
      <div className="px-[40px] max-w-[800px]">
        {accordionData.map((data, index) => {
          return (
            <AccordionItem2
              key={index}
              open={open === index}
              toggle={() => toggle(index)}
              title={data.title}
              desc={data.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AccordionItems;
