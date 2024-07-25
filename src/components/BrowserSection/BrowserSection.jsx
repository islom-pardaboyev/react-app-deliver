import React from "react";
import Title from "../Title/Title";
import { Cupcake, Doughnut, Kebab, Pizza, Salmon, PizzaPareponi, PizzaMeat, DonarKebab, SalmonRoll, CupcakeChoco, DoughnutMilk, DoughnutUnicorn, KathiKebab,  } from "../../assets/Icons";
import RecieptCard from "../RecieptCard/RecieptCard";
import RecieptCard2 from "../RecieptCard2/RecieptCard2";

const BrowserSection = () => {
  const reciept = [
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

  const reciept2 = [
    {
      id: 1, 
      img: PizzaPareponi,
      rate: 4,
      bg: "#E6F3F5",
      title: "Pizza Paperoni",
      type: 'Pizza'
    },
    {
      id: 2,
      img: PizzaMeat,
      rate: 3,
      bg: "#E6F3F5",
      title: "Pizza Meat",
      type: "Pizza"
    },
    {
      id: 3,
      img: DonarKebab,
      rate: 5,
      bg: "#EAEEFA",
      title: "Doner Kebab",
      type: "Kebab"
    },
    {
      id: 4,
      img: SalmonRoll,
      rate: 4,
      bg: "#F9EEF3",
      title: "Salmon Roll",
      type: "Salmon"
    },
    {
      id: 5,
      img: CupcakeChoco,
      rate: 4,
      bg: "#F0FEEB",
      title: "Cupcake Choco",
      type: "Cupcake"
    },
    {
      id: 6,
      img: DoughnutMilk,
      rate: 5,
      bg: "#F3F7D9",
      title: "Doughnut Milk",
      type: "Doughnut"
    },
    {
      id: 7,
      img: DoughnutUnicorn,
      rate: 5,
      bg: "#F3F7D9",
      title: "Doughnut Unicorn",
      type: "Doughnut"
    },
    {
      id: 8,
      img: KathiKebab,
      rate: 4,
      bg: "#EAEEFA",
      title: "Kathi Kebab",
      type: "Kebab"
    },
  ]

  return (
    <>
      <section className="container mx-auto max-w-[1239px]">
        <Title
          title={"Browser Our Category"}
          extraStyle={"!text-black leading-[50px] font-medium text-[38px]"}
        />
        <Title
          title={"reciept"}
          extraStyle={"leading-[50px] mb-[32px] font-medium text-[38px]"}
        />

        <div data-aos="fade-up" className="flex h-[215px] mb-5 gap-[10px]">
          {reciept.map((item) => (
            <RecieptCard
              key={item.id}
              title={item.title}
              count={item.count}
              bg={item.bg}
              Image={item.img}
            />
          ))}
        </div>
      </section>
      <section className="container mx-auto max-w-[1239px]">
        <Title
          title={"Browser Our Category"}
          extraStyle={"!text-black leading-[50px] font-medium mt-[200px] text-[38px]"}
        />
        <Title
          title={"reciept"}
          extraStyle={"leading-[50px] mb-[55px] font-medium text-[38px]"}
        />
        
        <div className="flex flex-wrap justify-between gap-7">
          {reciept2.map((item, index) => (<RecieptCard2 key={index} bg={item.bg} rate={item.rate} title={item.title} Image={item.img} type={item.type}/>))}
        </div>
      </section>
    </>
  );
};

export default BrowserSection;
