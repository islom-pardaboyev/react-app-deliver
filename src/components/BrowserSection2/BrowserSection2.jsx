import React from "react";
import Title from "../Title/Title";
import RecieptCard2 from "../RecieptCard2/RecieptCard2";
import Button from "../Button/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  PizzaPareponi,
  PizzaMeat,
  DonarKebab,
  SalmonRoll,
  CupcakeChoco,
  DoughnutMilk,
  DoughnutUnicorn,
  KathiKebab,
} from "../../assets/Icons";

const BrowserSection2 = () => {
  Aos.init();
  const reciept2 = [
    {
      id: 1,
      img: PizzaPareponi,
      rate: 4,
      bg: "#E6F3F5",
      title: "Pizza Paperoni",
      type: "Pizza",
    },
    {
      id: 2,
      img: PizzaMeat,
      rate: 3,
      bg: "#E6F3F5",
      title: "Pizza Meat",
      type: "Pizza",
    },
    {
      id: 3,
      img: DonarKebab,
      rate: 5,
      bg: "#EAEEFA",
      title: "Doner Kebab",
      type: "Kebab",
    },
    {
      id: 4,
      img: SalmonRoll,
      rate: 4,
      bg: "#F9EEF3",
      title: "Salmon Roll",
      type: "Salmon",
    },
    {
      id: 5,
      img: CupcakeChoco,
      rate: 4,
      bg: "#F0FEEB",
      title: "Cupcake Choco",
      type: "Cupcake",
    },
    {
      id: 6,
      img: DoughnutMilk,
      rate: 5,
      bg: "#F3F7D9",
      title: "Doughnut Milk",
      type: "Doughnut",
    },
    {
      id: 7,
      img: DoughnutUnicorn,
      rate: 5,
      bg: "#F3F7D9",
      title: "Doughnut Unicorn",
      type: "Doughnut",
    },
    {
      id: 8,
      img: KathiKebab,
      rate: 4,
      bg: "#EAEEFA",
      title: "Kathi Kebab",
      type: "Kebab",
    },
  ];
  return (
    <section className="container mx-auto mt-[100px] max-w-[1239px] mb-[191px]">
      <div data-aos="flip-right" data-aos-duration="1000">
        <Title
          title={"Browser Our Category"}
          extraStyle={"!text-black leading-[50px] font-medium text-[38px]"}
        />
        <Title
          title={"reciept"}
          extraStyle={"leading-[50px] mb-[32px] font-medium text-[38px]"}
        />
      </div>

      <div
        data-aos="flip-left"
        data-aos-duration="1000"
        className="flex flex-wrap justify-between gap-7"
      >
        {reciept2.map((item, index) => (
          <RecieptCard2
            key={index}
            bg={item.bg}
            rate={item.rate}
            title={item.title}
            Image={item.img}
            type={item.type}
          />
        ))}
      </div>


      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="flex items-center mt-[68px] mb-[59px] justify-center"
      >
        <Button title={"All Receipt"} />
      </div>
    </section>
  );
};

export default BrowserSection2;
