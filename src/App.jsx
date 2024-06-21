import { Route, Routes } from "react-router-dom";
import Header from "pages/Header/Header";
import Shop from "pages/Shop/Shop";
import Checkout from "pages/Checkout/Checkout";
import Final from "pages/Final/Final";
import Cart from "pages/Checkout/Cart/Cart";
import Contacts from "pages/Checkout/Contacts/Contacts";
import Shipping from "pages/Checkout/Shipping/Shipping";
import NoPage from "pages/NoPage/NoPage";

function App() {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <Routes>
          <Route path="/">
            <Route index element={<Shop />} />
            <Route path="checkout" element={<Checkout />}>
              <Route path="cart" element={<Cart />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="shipping" element={<Shipping />} />
            </Route>
            <Route path="final" element={<Final />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
