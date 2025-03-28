import React from "react";
import InfoCard from "@/components/InfoCard";
function AboutHome() {
  return (
    <section
      id="about-home"
      className="relative w-full min-h-screen bg-cover px-10  bg-no-repeat"
      style={{ backgroundImage: "url('/bg-black.jpg')" }}
    >
      <div className=" py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="lg:text-5xl text-3xl font-bold pt-20 pb-8  uppercase tracking-wide">
            Biz Haqimizda
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-24 gap-8">
          <InfoCard
            icon="/chef.png"
            title="10+ Yillik tajriba"
            description="Tajribali oshpazlarimiz eng mazali taomlarni tayyorlaydi."
          />
          <InfoCard
            icon="/plov.png"
            title="155+ Tonna osh tayyorlandi"
            description="Har kuni minglab mehmonlarimiz uchun sifatli taomlar."
          />
          <InfoCard
            icon="/buyurtma.png"
            title="60,000+ Buyurtmalar"
            description="Minglab buyurtmalar bajarildi, mijozlarimiz doim xursand!"
          />
          <InfoCard
            icon="/people.png"
            title="1M+ Mamnun mijozlar"
            description="Bizning taomlarimizni tatib ko‘rgan har bir mijoz mamnun."
          />
        </div>
        <div className=" text-center flex items-center  justify-center py-16 gap-6">
          <img src="/instagram.png" alt="" className="size-28" />
          <div className=" flex items-start flex-col tracking-wider font-bold text-xl gap-2">
            <h4 className=" tracking-widest ">Instagram </h4>
            <p className=" tracking-widest">choyxona_sharq</p>
            <a
              className="text-end w-full text-xl btn btn-primary"
              href="https://www.instagram.com/choyxona_sharq/"
              target="_blank"
            >
              O'tish
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHome;
