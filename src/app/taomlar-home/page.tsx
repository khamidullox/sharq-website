import React from "react";
import { taomlar } from "../../../public/data/data";
import Link from "next/link";

function TaomlarHome() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover px-28  bg-no-repeat"
      style={{ backgroundImage: "url('/bg-black.jpg')" }}
      id="taomlar-home"
    >
      {/* <h1>Whereas recognition of the inherent dignity</h1> */}

      <ul className=" flex justify-between min-h-screen  flex-wrap gap-16 py-16 items-center">
        {taomlar.map((item, id) => {
          return (
            <Link
              href={`${item.href}`}
              key={id}
              className="card bg-base-100 text-black w-96 h-[] object-center hover:shadow-white hover:shadow-sm transition-transform duration-300 hover:scale-105 "
            >
              <figure>
                <img
                  src={item.img}
                  alt="Shoes"
                  className=" object-top h-58 w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.blok}</h2>
                <p></p>
                <div className="card-actions justify-end">
                  <button className=" uppercase tracking-widest text-black">
                    batafsil &gt;
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </section>
  );
}

export default TaomlarHome;
