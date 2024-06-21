import Button from "src/components/Button/Button";

import {
  increaseAmount,
  decreaseAmount,
  deleteItem,
} from "src/pages/Checkout/Cart/cartSlice";

import { useDispatch } from "react-redux";

import minus from "src/assets/images/minus.svg";
import plus from "src/assets/images/plus.svg";
import trash from "src/assets/images/trash.svg";

export default function CartItem({
  id,
  title,
  description,
  price,
  image,
  amount,
}) {
  const dispatch = useDispatch();

  return (
    <article className="bg-white w-[95vw] lg:w-[960px] h-[196px] md:h-[146px] rounded-lg flex pr-1">
      <div className="w-[130px] h-[130px] flex items-center m-2">
        <img src={image} alt="product picture" />
      </div>

      <aside className="flex flex-col justify-between w-[65vw] md:w-[80vw] lg:w-[814px] pt-2 pb-1">
        <div className="flex justify-between items-end flex-col md:flex-row ">
          <p className="max-h-36 w-[60vw] md:w-[60vw] lg:w-[700px] overflow-y-hidden">
            {title} {description}
          </p>

          <Button size="s" handler={() => dispatch(deleteItem(id))}>
            <img src={trash} alt="trashcan" className="mr-[6px]" />
            Delete
          </Button>
        </div>
        <footer className="flex justify-between items-center">
          <aside className="w-[128px] flex justify-between items-center">
            <Button
              isDisabled={amount < 2}
              size="xs"
              handler={() => dispatch(decreaseAmount(id))}
            >
              <img src={minus} alt="minus" />
            </Button>
            <p className="font-bold">{amount}</p>
            <Button size="xs" handler={() => dispatch(increaseAmount(id))}>
              <img src={plus} alt="plus" />
            </Button>
          </aside>
          <div>
            Price: <span className="text-2xl">${price}</span>
          </div>
        </footer>
      </aside>
    </article>
  );
}
