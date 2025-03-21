import React from "react";

function Home() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover top-28 bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-home.jpg')" }}
      id="home"
    >
      {/* Логотип (адаптивный размер) */}
      <img
        src="/sharqLogo.jpg"
        className="absolute left-1/2 transform -translate-x-1/2 w-40 md:w-60 lg:w-72"
        alt="logo"
      />

      {/* Текст (адаптивный размер) */}
      <div className="absolute inset-0 flex flex-col  items-center justify-center text-white text-center px-4">
        <h1 className="uppercase font-bold fontArgue text-4xl md:text-6xl lg:text-8xl leading-tight">
          <span>Hohlagan joyda</span>
          <br />
          <span>yeyish mumkin!</span>
        </h1>
      </div>
    </section>
  );
}

export default Home;
