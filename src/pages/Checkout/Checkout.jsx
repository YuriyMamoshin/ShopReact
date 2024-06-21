import { Outlet } from "react-router-dom";
import CustomLink from "pages/Checkout/CustomLink/CustomLink";
import { useSelector } from "react-redux";

export default function Checkout() {
  const shoppingStage = useSelector((state) => state.shop.shoppingStage);

  return (
    <section className="pt-[29px]">
      <ul className="flex gap-2">
        <CustomLink reference={"cart"}>Cart</CustomLink>
        <li>&gt;</li>
        {shoppingStage > 1 ? (
          <CustomLink reference="contacts">Contact information</CustomLink>
        ) : (
          <li>Contact information</li>
        )}

        <li>&gt;</li>
        {shoppingStage > 2 ? (
          <CustomLink reference="shipping">Shipment information</CustomLink>
        ) : (
          <li>Shipment information</li>
        )}
      </ul>
      <Outlet />
    </section>
  );
}
