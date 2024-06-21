import Card from "src/components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import FinalItem from "pages/Final/FinalItem/FinalItem";
import calculatePriceSum from "src/calculatePriceSum";
import { Link } from "react-router-dom";
import Button from "src/components/Button/Button";
import { resetStage } from "pages/Shop/shopSlice";
import { resetCart } from "pages/Checkout/Cart/cartSlice";

export default function Final() {
  const contactsState = useSelector((state) => state.contacts.contacts);
  const shippingState = useSelector((state) => state.shipping.shipping);
  const cartState = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  function resetEverything() {
    dispatch(resetStage());
    dispatch(resetCart());
  }

  const cartContent = cartState.map((cartItem) => {
    return (
      <FinalItem
        key={cartItem.id}
        title={cartItem.title}
        description={cartItem.description}
        price={cartItem.price}
        image={cartItem.image}
        amount={cartItem.amount}
      />
    );
  });

  function getDate(timestamp) {
    return timestamp.toLocaleString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  function calculateServiceSum(service) {
    return cartState.reduce((prevAmount, cartItem) => {
      return prevAmount + cartItem[service];
    }, 0);
  }

  const shippingCost = calculateServiceSum("shipping");
  const taxes = calculateServiceSum("tax");

  return (
    <main className="flex flex-col gap-8 p-8">
      <header className="h-[235px] w-[95vw] lg:w-[895px] flex flex-col justify-between items-center">
        <img src="src/assets/images/bigcheck.svg" alt="" className="w-20" />
        <h2 className="text-[32px]">Thank you for your order!</h2>
        <p>
          The order confirmation email with details of your order and a link to
          track its progress has been sent to your email address.
        </p>
        <p className="font-bold">Your order #000000001 is - PENDING</p>
        <p>Order Date: {getDate(new Date())}</p>
      </header>
      <section className="flex gap-[30px]">
        <Card styles="h-[154px] lg:h-[114px] w-[45vw] lg:w-[465px] p-4">
          <h4 className="flex">
            <img
              src="src/assets/images/dude.svg"
              alt=""
              className="mr-[10px]"
            />
            Contact information
          </h4>
          {contactsState && (
            <>
              <p>
                {contactsState.firstName} {contactsState.lastName}
              </p>
              <p>{contactsState.email}</p>
              <p>{contactsState.phone}</p>
            </>
          )}
        </Card>
        <Card styles="h-[154px] lg:h-[114px] w-[45vw] lg:w-[465px] p-4">
          <h4 className="flex">
            <img
              src="src/assets/images/track.svg"
              alt=""
              className="mr-[10px]"
            />
            Shipment information
          </h4>
          {shippingState && (
            <>
              <p>
                {shippingState.address}, {shippingState.apartment}
              </p>
              <p>
                {shippingState.city}, {shippingState.region},{" "}
                {shippingState.zipCode}
              </p>
              <p>{shippingState.state}</p>
            </>
          )}
        </Card>
      </section>
      <Card styles="p-4 w-[97vw] lg:w-[960px]">
        <h4 className="flex">
          <img src="src/assets/images/info.svg" alt="" className="mr-[10px]" />
          Order summary
        </h4>
        {cartState && <>{cartContent}</>}

        <table className="text-xl">
          <tbody>
            <tr>
              <td className="w-[273px]">Subtotal</td>
              <td>${calculatePriceSum(cartState).toFixed(2)}</td>
            </tr>
            <tr>
              <td className="w-[273px]">Shipping & Handling</td>
              <td>${shippingCost.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="w-[273px]">Tax:</td>
              <td>${taxes.toFixed(2)}</td>
            </tr>
            <tr className="font-bold">
              <td className="w-[273px]">Grand Total:</td>
              <td>
                $
                {(calculatePriceSum(cartState) + shippingCost + taxes).toFixed(
                  2
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
      <Link to="../">
        <Button size="l" handler={() => resetEverything()}>
          Continue shopping
        </Button>
      </Link>
    </main>
  );
}
