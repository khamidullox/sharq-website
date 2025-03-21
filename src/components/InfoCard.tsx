function InfoCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center justify-center gap-8">
      <img src={icon} className="  size-28" alt="" color="#fff" />
      <div className=" flex flex-col gap-6 ">
        <h3 className=" text-3xl font-bold"> {title}</h3>
        <p className=" ">{description}</p>
      </div>
    </div>
  );
}

export default InfoCard;
