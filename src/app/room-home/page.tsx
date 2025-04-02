import React from "react";

function RoomHome() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover -top-20 bg-center bg-no-repeat"
      id="taomlar-home"
    >
      <div className="  pt-40  text-white px-16">
        <h3 className="text-5xl font-bold pb-10 text-center">Xonalar</h3>
        <ul className="grid lg:grid-cols-3 gap-16 md:grid-cols-2 grid-cols-1 "></ul>
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
    </section>
  );
}

export default RoomHome;
