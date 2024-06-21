import Heading from "src/pages/Checkout/Heading/Heading";
import CartItem from "src/pages/Checkout/Cart/CartItem/CartItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "src/components/Button/Button";
import calculatePriceSum from "src/calculatePriceSum";
import { goToNextStage } from "src/pages/Shop/shopSlice";

export default function Cart() {
  const cartState = useSelector((state) => state.cart.cart);
  const shoppingStage = useSelector((state) => state.shop.shoppingStage);

  const dispatch = useDispatch();

  function calculateTogether() {
    return cartState.reduce((prevAmount, cartItem) => {
      return prevAmount + cartItem.amount;
    }, 0);
  }

  const cartContent = cartState.map((cartItem) => {
    return (
      <CartItem
        key={cartItem.id}
        id={cartItem.id}
        title={cartItem.title}
        description={cartItem.description}
        price={cartItem.price}
        image={cartItem.image}
        amount={cartItem.amount}
      />
    );
  });
  return (
    <section>
      <Heading>Cart</Heading>
      <div className="flex flex-col gap-2">{cartContent}</div>
      <aside className="my-8 w-60">
        <p className="flex justify-between text-xl">
          Together:{" "}
          <span className="font-bold">{calculateTogether()} products.</span>
        </p>
        <p className="flex justify-between text-xl">
          Sum:{" "}
          <span className="font-bold">${calculatePriceSum(cartState)}</span>
        </p>
      </aside>
      <Link to="../contacts">
        <Button
          size="l"
          isDisabled={!cartState.length}
          handler={!!shoppingStage ? () => dispatch(goToNextStage(2)) : undefined}
        > 
          Next step
        </Button>
      </Link>
    </section>
  );
}
