import Button from "components/Button/Button";
import plus from "src/assets/images/plus.svg";
import check from "src/assets/images/check.svg";
import { addItem, deleteItem } from "src/pages/Checkout/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ShopItem({ id, title, description, price, image }) {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart.cart);

  function checkIsInCart() {
    return cartState.find((item) => item.id === id);
  }

  function handleAddToCart() {
    dispatch(
      addItem({
        id,
        title,
        description,
        price,
        image,
        amount: 1,
        shipping: 0,
        tax: 0,
      })
    );
  }

  return (
    <article className="w-48 md:w-52 h-[405px] bg-white p-2 grid grid-rows-[225px_50px_20px_36px] gap-y-4 shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] justify-self-center self-center rounded-lg">
      <img src={image} alt="" className="self-center w-44 md:w-48" />
      <div className="">
        <p>{title}</p>
        <p className="w-44 md:w-48 truncate">{description}</p>
      </div>
      <p className="text-2xl">${price}</p>
      {checkIsInCart() ? (
        <Button size="xl" handler={() => dispatch(deleteItem(id))}>
          <img src={check} alt="" className="mr-[5.5px]" />
          Added
        </Button>
      ) : (
        <Button size="xl" handler={handleAddToCart}>
          <img src={plus} alt="" className="mr-[5.5px]" />
          Add to cart
        </Button>
      )}
    </article>
  );
}
