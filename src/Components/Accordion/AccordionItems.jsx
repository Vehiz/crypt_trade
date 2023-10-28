
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
      title: "What is Bitcoin?",
      desc: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software.",
    },
    {
      title: "What is Ethereum?",
      desc: "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. After Bitcoin, it is the largest cryptocurrency by market capitalization. Ethereum is the most actively used blockchain.",
    },
    {
      title: "What is Litecoin?",
      desc: "Litecoin is a peer-to-peer cryptocurrency and open-source software project released under the MIT/X11 license. Creation and transfer of coins is based on an open source cryptographic protocol and is not managed by any central authority.",
    },
  ];
  return (
    <div className="bg-[#1A1AFF] grid place-items-center">
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
