import React from "react";
import {
  ChefHat,
  Utensils,
  Users,
  ClipboardList,
  PhoneCall,
} from "lucide-react";
import InfoCard from "@/components/InfoCard";
function AboutHome() {
  return (
    <section
      id="about-home"
      className="relative w-full min-h-screen bg-cover px-28  bg-no-repeat"
      style={{ backgroundImage: "url('/bg-black.jpg')" }}
    >
      {/* <div className="bg-black text-white py-20 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 uppercase tracking-wide">
            Biz Haqimizda
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <InfoCard
              icon={<ChefHat size={50} className="text-yellow-400" />}
              number="10+"
              title="Yillik tajriba"
              description="Tajribali oshpazlarimiz eng mazali taomlarni tayyorlaydi."
            />

            <InfoCard
              icon={<Utensils size={50} className="text-green-400" />}
              number="155+"
              title="Tonna osh tayyorlandi"
              description="Har kuni minglab mehmonlarimiz uchun sifatli taomlar."
            />

            <InfoCard
              icon={<Users size={50} className="text-blue-400" />}
              number="1M+"
              title="Mamnun mijozlar"
              description="Bizning taomlarimizni tatib ko‘rgan har bir mijoz mamnun."
            />

            <InfoCard
              icon={<ClipboardList size={50} className="text-red-400" />}
              number="60,000+"
              title="Buyurtmalar"
              description="Minglab buyurtmalar bajarildi, mijozlarimiz doim xursand!"
            />
          </div>

          <div className="mt-16">
            <p className="text-xl opacity-80">Savollaringiz bormi?</p>
            <a
              href="tel:+998954007500"
              className="mt-6 inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-4 px-8 rounded-lg hover:bg-yellow-300 transition shadow-lg"
            >
              <PhoneCall size={24} /> +998 95 400 75 00
            </a>
          </div>
        </div>
      </div> */}

      <div className=" py-32 p">
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
      </div>
    </section>
  );
}

export default AboutHome;
