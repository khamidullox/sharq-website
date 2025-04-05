import React from "react";
import { taomlar } from "../../../public/data/data";
import Link from "next/link";

function TaomlarHome() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover px-10 content-center  bg-no-repeat"
      style={{ backgroundImage: "url('/img/bg-black.jpg')" }}
      id="taomlar-home"
    >
      {/* <h1>Whereas recognition of the inherent dignity</h1> */}

      <ul className=" flex justify-between items-center min-h-screen lg:px-5 md:px-32 w-full   flex-wrap gap-16 py-16 ">
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
                  alt={item.blok}
                  className=" object-top object-contain w-full"
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
