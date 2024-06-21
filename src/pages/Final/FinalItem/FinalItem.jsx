export default function FinalItem({
  title,
  description,
  price,
  image,
  amount,
}) {
  return (
    <div className="flex py-4 border-[#C8C8C8] border-solid border-b">
      <img src={image} alt="" className="w-[90px] h-[90px] mr-2" />
      <aside className="flex flex-col justify-between ">
        <p className="pt-2 pr-2 lg:pr-36">
          {title} {description}
        </p>
        <p className="font-bold">
          ${price * amount}, {amount} product{amount > 1 && "s"}.
        </p>
      </aside>
    </div>
  );
}
