import React from "react";
import Title from "../Title/Title";
import { Cupcake, Doughnut, Kebab, Pizza, Salmon } from "../../assets/Icons";
import RecieptCard from "../RecieptCard/RecieptCard";

const BrowserSection = () => {
  const receipt = [
    {
      id: 1,
      img: Cupcake,
      title: "Cupcake",
      bg: "#F0FEEB",
      count: 22,
    },
    {
        id: 2,
        img: Pizza,
        title: "Pizza",
        bg: "#e6f3f5",
        count: 25,
    },
    {
        id: 3,
        img: Kebab,
        title: "Kebab",
        bg: "#EAEEFA",
        count: 12,
    },
    {
        id: 4,
        img: Salmon,
        title: "Salmon",
        bg: "#F9EEF3",
        count: 22,
    },
    {
        id: 5,
        img: Doughnut,
        title: "Doughnut",
        bg: "#F3F7D9",
        count: 11,
    },
  ];
  return (
    <section className="container mx-auto max-w-[1239px]">
      <Title
        title={"Browser Our Category"}
        extraStyle={"!text-black leading-[50px] font-medium text-[38px]"}
      />
      <Title
        title={"Receipt"}
        extraStyle={"leading-[50px] mb-[32px] font-medium text-[38px]"}
      />

      <div data-aos="fade-up" className="flex h-[215px] mb-5 gap-[10px]">
        {receipt.map(item => <RecieptCard key={item.id} title={item.title} count={item.count} bg={item.bg} Image={item.img}/>)}
      </div>
    </section>
  );
};

export default BrowserSection;
