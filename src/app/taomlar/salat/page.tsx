import React, { Fragment } from "react";
import { salats } from "../../../../public/data/data";
import CardItem from "@/components/CardItem";
import Link from "next/link";

function Salt() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover -top-20 bg-center bg-no-repeat"
      id="taomlar-home"
    >
      <div className="  pt-40  text-white px-16">
        <h3 className="text-5xl font-bold pb-10 text-center"></h3>
        <ul className="flex justify-between items-center  lg:px-5 md:px-32   flex-wrap gap-16 ">
          {salats.salat.map((item, id) => {
            return (
              <Fragment key={id}>
                <CardItem
                  id={id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                />
              </Fragment>
            );
          })}
        </ul>
      </div>
      <p className=" text-end pr-16 pt-16 flex justify-end gap-8 text-2xl font-bold tracking-widest">
        <Link className=" hover:link" href="/taomlar/taomlars">
          &lt;-- Taomlar{" "}
        </Link>
        <span></span>
        <Link className=" hover:link" href="/taomlar/chay">
          Suvlar --&gt;
        </Link>
      </p>
    </section>
  );
}

export default Salt;
