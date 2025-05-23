import React, { Fragment } from "react";
import { roomHome } from "../../../public/data/data";

import CardItem from "@/components/CardItem";

function RoomHome() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover  bg-center bg-no-repeat   text-white px-16"
      id="taomlar-home"
    >
      <div className="    text-white">
        <h3 className="text-4xl font-bold pb-5  text-center md:pr-0 sm:pr-2">
          Xonalar
        </h3>
      </div>
      {/* <p className=" text-end pr-16 pt-16 flex justify-end gap-8 text-2xl font-bold tracking-widest">
        <Link className=" hover:link" href="/taomlar/taomlars">
          &lt;-- Taomlar{" "}
        </Link>
        <span></span>
        <Link className=" hover:link" href="/taomlar/chay">
          Suvlar --&gt;
        </Link>
      </p> */}
      <div className=" flex justify-between items-center min-h-screen lg:px-5 md:px-32   flex-wrap gap-16 ">
        {roomHome.map((item, id) => {
          return (
            // <Link
            //   href={`${item.name}` || ""}
            //   key={id}
            //   className="card bg-base-100 text-black w-96 h-[] object-center hover:shadow-white hover:shadow-sm transition-transform duration-300 hover:scale-105 "
            // >
            //   <figure>
            //     <img
            //       src={item.img}
            //       alt={item.name}
            //       className=" object-top object-contain w-full"
            //     />
            //   </figure>
            //   <div className="card-body">
            //     <h2 className="card-title">{item.name}</h2>
            //     <p></p>
            //     <div className="card-actions justify-end">
            //       <button className=" uppercase tracking-widest text-black">
            //         batafsil &gt;
            //       </button>
            //     </div>
            //   </div>
            // </Link>
            <Fragment key={id}>
              <CardItem
                id={id}
                img={item.img}
                name={item.name}
                price={item.price + " so'm"}
                description=""
              />
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default RoomHome;
