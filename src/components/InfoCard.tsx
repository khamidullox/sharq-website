import Link from "next/link";
import { ReactNode } from "react";
function InfoCard({
  icon,
  title,
  description,
  iocnImport,
}: {
  icon?: string;
  title: string;
  description: string;
  iocnImport?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-center gap-8 md:w-[580px] w-full">
      {icon && <img src={icon} className="  size-28" alt="" color="#fff" />}
      {iocnImport && iocnImport}
      <div className=" flex flex-col gap-6 ">
        <h3 className=" text-3xl font-bold tracking-wider"> {title}</h3>

        {title == "Manzil" ? (
          <>
            <Link
              href="https://maps.app.goo.gl/8vEDbPZkpuyzsaZo8"
              className="text-lg link-hover hover:text-blue-100"
              target="_blank"
            >
              {" "}
              {description}
            </Link>
          </>
        ) : (
          <p className="text-lg">{description}</p>
        )}
      </div>
      {title == "Manzil" ? (
        <Link
          className="font-bold text-xl border border-e-white p-2 px-3 hover:p-8 duration-700 rounded-xs hover:bg-white hover:text-black hover:border-black "
          href="https://maps.app.goo.gl/8vEDbPZkpuyzsaZo8"
          target="_blank"
        >
          Xarita
        </Link>
      ) : (
        <div className=""></div>
      )}
    </div>
  );
}

export default InfoCard;
