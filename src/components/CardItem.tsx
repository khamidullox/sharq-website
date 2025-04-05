interface CardItem {
  id: number;
  img: string;
  name: string;
  description: string;
  price: string | number;
}

function CardItem({ id, img, name, description, price }: CardItem) {
  return (
    <li
      key={id * Math.random()}
      className="card bg-base-100 text-black w-96 md:h-96 h-72 justify-center object-center hover:shadow-white hover:shadow-sm transition-transform duration-300 hover:scale-105 "
    >
      <figure>
        <img
          src={img}
          alt={name}
          className=" object-top object-contain w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <p className="  font-bold text-xl tracking-widest text-end underline text-black">
            {price}
          </p>
        </div>
      </div>
    </li>
  );
}

export default CardItem;
