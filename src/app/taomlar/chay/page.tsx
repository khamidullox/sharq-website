import React from "react";
import { choylar } from "../../../../public/data/data";
import CardItem from "@/components/CardItem";
import Link from "next/link";

function Chay() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover -top-20 bg-center bg-no-repeat"
      id="taomlar-home"
    >
      {/* Логотип (адаптивный размер) */}
      {/* Текст (адаптивный размер) */}
      <div className="  pt-40  text-white px-16">
        <h3 className="text-5xl font-bold pb-10 text-center">Choy</h3>
        <ul className="grid lg:grid-cols-3 gap-16 md:grid-cols-2 grid-cols-1 ">
          {choylar.choy.map((item, id) => {
            return (
              <CardItem
                id={id}
                img={item.img}
                name={item.name}
                price={item.price}
                description={item.description}
              />
            );
          })}
        </ul>
        <h3 className="text-5xl font-bold py-10 text-center">Suvlar</h3>
        <ul className="grid lg:grid-cols-3 gap-16 md:grid-cols-2 grid-cols-1 ">
          {choylar.suv.map((item, id) => {
            return (
              <CardItem
                id={id}
                img={item.img}
                name={item.name}
                price={item.price}
                description={item.description}
              />
            );
          })}
        </ul>
        <p className=" text-end pr-16 pt-16 flex justify-end gap-8 text-2xl font-bold tracking-widest">
          <Link className=" hover:link" href="/taomlar/taomlars">
            &lt;-- Taomlar{" "}
          </Link>
          <span></span>
          <Link className=" hover:link" href="/taomlar/salat">
            Salat --&gt;
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Chay;
