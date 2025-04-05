import React from "react";
import InfoCard from "@/components/InfoCard";
import Link from "next/link";
import { LuMapPinned } from "react-icons/lu";
import { CiInstagram } from "react-icons/ci";

import { PiChefHatFill } from "react-icons/pi";
import { GiMeatCleaver } from "react-icons/gi";
import { CiViewList } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";

function AboutHome() {
  return (
    <section
      id="about-home"
      className="relative w-full min-h-screen bg-cover px-10 md:pl-16 sm:pl-2  bg-no-repeat"
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
            // icon="/img/chef.png"
            iocnImport={<PiChefHatFill className="size-28" />}
            title="10+ Yillik tajriba"
            description="Tajribali oshpazlarimiz eng mazali taomlarni tayyorlaydi."
          />
          <InfoCard
            // icon="/img/plov.png"
            iocnImport={<GiMeatCleaver className="size-28" />}
            title="155+ Tonna osh tayyorlandi"
            description="Har kuni minglab mehmonlarimiz uchun sifatli taomlar."
          />
          <InfoCard
            // icon="/img/buyurtma.png"
            iocnImport={<CiViewList className="size-28" />}
            title="60,000+ Buyurtmalar"
            description="Minglab buyurtmalar bajarildi, mijozlarimiz doim xursand!"
          />
          <InfoCard
            // icon="/img/people.png"
            iocnImport={<IoIosPeople className="size-28" />}
            title="1M+ Mamnun mijozlar"
            description="Bizning taomlarimizni tatib ko‘rgan har bir mijoz mamnun."
          />
          <InfoCard
            title="Manzil"
            description="Sarmazor QFY, Sharq kuchasi, Farg'ona Viloyati, Margilan"
            iocnImport={<LuMapPinned className="size-28" />}
          />
          <div className="flex items-center  md:w-[580px] w-full">
            <div className="flex md:gap-0 gap-2 w-full items-center justify-between md:text-base text-xs ">
              {/* <img src="/img/instagram.png" alt="" className="size-28" /> */}
              <CiInstagram className="md:size-28 size-16" />
              <div className=" text-xs flex flex-col md:gap-4 ">
                <h3 className=" md:text-3xl text-lg font-bold tracking-wider">
                  {" "}
                  Instagram
                </h3>
                <Link
                  href="https://www.instagram.com/choyxona_sharq/"
                  target="_blank"
                  className="md:text-2xl text-lg  tracking-widest  link-hover hover:text-blue-100"
                >
                  @choyxona_sharq
                </Link>
              </div>
              <Link
                className="font-bold text-xl  border border-e-white p-2 px-3 hover:p-8 duration-700 rounded-xs hover:bg-white hover:text-black hover:border-black "
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
