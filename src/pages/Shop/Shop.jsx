import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fillShop } from "pages/Shop/shopSlice";
import ShopItem from "src/pages/Shop/ShopItem/ShopItem";
import API_PATH from "src/API_PATH";
import { useState } from "react";

export default function Shop() {
  const dispatch = useDispatch();

  const shopState = useSelector((state) => state.shop.shop);
  const [priceFilter, setPriceFilter] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(API_PATH)
      .then((res) => res.json())
      .then((data) => {
        const shopData = data.products.map((shopDataItem) => {
          return {
            id: shopDataItem.id,
            title: shopDataItem.title,
            description: shopDataItem.description,
            price: shopDataItem.price,
            image: shopDataItem.thumbnail,
          };
        });
        shopData.length = 10;
        dispatch(fillShop(shopData));
      });
  }, []);

  function findTextMatch(textSpan) {
    return textSpan.toLowerCase().includes(searchValue.toLowerCase());
  }

  const filteredContent = shopState.filter(
    (shopDataItem) =>
      shopDataItem.price > priceFilter &&
      (findTextMatch(shopDataItem.description) ||
        findTextMatch(shopDataItem.title))
  );

  const shopContent = filteredContent.map((shopDataItem) => {
    return (
      <ShopItem
        key={shopDataItem.id}
        id={shopDataItem.id}
        title={shopDataItem.title}
        description={shopDataItem.description}
        price={shopDataItem.price}
        image={shopDataItem.image}
      />
    );
  });
  return (
    <article className="flex flex-col">
      <aside className="flex justify-around mt-4 h-10 flex-col md:flex-row">
        <div className="flex items-center">
          <p className="text-xl mr-2">Search:</p>
          <input
          className="shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] rounded-lg"
            type="text"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
        </div>

        <div className="flex items-center w-[310px]">
          <p className="text-xl mr-4">Price from:</p>
          <input
            type="range"
            min={0}
            max={1500}
            step={300}
            value={priceFilter}
            onChange={(event) => {
              setPriceFilter(event.target.value);
            }}
          />
          <p className="text-xl ml-4">${priceFilter}</p>
        </div>
      </aside>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-8 gap-8">
        {shopContent}
      </section>
    </article>
  );
}
