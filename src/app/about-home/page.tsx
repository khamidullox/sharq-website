import React from "react";
import InfoCard from "@/components/InfoCard";
import Link from "next/link";
import { LuMapPinned } from "react-icons/lu";
import { SiInstagram } from "react-icons/si";
function AboutHome() {
  return (
    <section
      id="about-home"
      className="relative w-full min-h-screen bg-cover px-10  bg-no-repeat"
      style={{ backgroundImage: "url('/img/bg-black.jpg')" }}
    >
      <div className=" py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="lg:text-5xl text-3xl font-bold pt-20 pb-8  uppercase tracking-wide">
            Biz Haqimizda
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center w-full md:gap-24 gap-8">
          <InfoCard
            icon="/img/chef.png"
            title="10+ Yillik tajriba"
            description="Tajribali oshpazlarimiz eng mazali taomlarni tayyorlaydi."
          />
          <InfoCard
            icon="/img/plov.png"
            title="155+ Tonna osh tayyorlandi"
            description="Har kuni minglab mehmonlarimiz uchun sifatli taomlar."
          />
          <InfoCard
            icon="/img/buyurtma.png"
            title="60,000+ Buyurtmalar"
            description="Minglab buyurtmalar bajarildi, mijozlarimiz doim xursand!"
          />
          <InfoCard
            icon="/img/people.png"
            title="1M+ Mamnun mijozlar"
            description="Bizning taomlarimizni tatib ko‘rgan har bir mijoz mamnun."
          />
          <InfoCard
            title="Manzil"
            description="Sarmazor QFY, Sharq kuchasi, Farg'ona Viloyati, Margilan"
            iocnImport=<LuMapPinned className="size-28" />
          />
          <div className="flex items-center  md:w-[580px] w-full">
            <div className="flex gap-8 items-center justify-between ">
              {/* <img src="/img/instagram.png" alt="" className="size-28" /> */}
              <SiInstagram className="size-28" />
              <div className=" flex flex-col gap-4 ">
                <h3 className=" text-3xl font-bold tracking-wider">
                  {" "}
                  Instagram
                </h3>
                <p className="text-2xl tracking-widest">@choyxona_sharq</p>
              </div>
              <Link
                className="font-bold text-xl  border border-e-white p-2 px-3 hover:p-8 duration-700 rounded-xs hover:bg-amber-50 hover:text-black hover:border-black "
                href="https://www.instagram.com/choyxona_sharq/"
                target="_blank"
              >
                O&apos;tish
              </Link>
            </div>
          </div>
        </div>
        <div className=" text-center flex items-center  justify-center py-16 gap-6"></div>
      </div>
    </section>
  );
}

export default AboutHome;
