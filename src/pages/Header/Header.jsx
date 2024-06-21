import { Link } from "react-router-dom";
import Button from "src/components/Button/Button";
import { useSelector } from "react-redux";

export default function Header() {
  const cartState = useSelector((state) => state.cart.cart);
  const shoppingStage = useSelector((state) => state.shop.shoppingStage);

  return (
    <header className="h-20 w-full bg-[#171717] flex justify-between items-center px-[60px]">
      <Link to="/">
      <aside className="relative text-center w-56 h-10 pl-[30px]">
        <div className="absolute w-[28.28px] h-[28.28px] rounded-[5.28px] rotate-45 top-1 left-0 z-10 bg-[#00AE1C]"></div>
        <div className="absolute w-[28.28px] h-[28.28px] rounded-[5.28px] rotate-45 top-1 left-[11.31px] bg-[#004C0C]"></div>
        <p className="text-white text-2xl">WhateverStuff</p>
      </aside>
      </Link>


      <Link to="checkout/cart" className="relative">
        <Button size="s"> Cart </Button>
        {!!cartState.length && shoppingStage < 4 && (
          <div className="absolute top-[-4px] right-[-4px] rounded-full h-4 w-4 bg-[#E9ED08] text-[11px] text-black text-center">
            {cartState.length}
          </div>
        )}
      </Link>
    </header>
  );
}
