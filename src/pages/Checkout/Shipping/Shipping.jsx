import Heading from "pages/Checkout/Heading/Heading";
import { Formik, Form } from "formik";
import Button from "src/components/Button/Button";
import CustomInput from "src/components/CustomInput/CustomInput";
import { addShippingData } from "pages/Checkout/Shipping/shippingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomSelect from "src/components/CustomSelect/CustomSelect";
import { schemaShipping } from "src/schemas/schemaShipping";
import { goToNextStage } from "src/pages/Shop/shopSlice";

export default function Shipping() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shoppingStage = useSelector((state) => state.shop.shoppingStage);

  return (
    <section>
      <Heading>Shipping information</Heading>

      <Formik
        initialValues={{
          address: "",
          apartment: "",
          city: "",
          region: "",
          state: "",
          zipCode: "",
        }}
        validationSchema={schemaShipping}
        onSubmit={(values) => {
          dispatch(addShippingData(values));
          navigate("../../final");
          dispatch(goToNextStage(4));
        }}
      >
        <Form>
          <article className="h-[350px] lg:h-[320px] w-[95vw] lg:w-[960px] mb-8 pl-8 flex flex-col justify-evenly bg-white rounded-lg">
            <div className="flex">
              <CustomInput
                label="Address (№ P. O. Boxes)*"
                name="address"
                type="text"
                placeholder="Enter your address"
              />
            </div>
            <div className="flex">
              <CustomInput
                label="Apartment, suite etc. (optional)"
                name="apartment"
                type="text"
                placeholder="Enter your apartment information"
              />
            </div>
            <div className="flex">
              <CustomInput
                label="City*"
                name="city"
                type="text"
                placeholder="Enter your city"
              />
            </div>
            <div className="flex flex-col lg:flex-row">
              <CustomSelect
                label="Country/Region*"
                name="region"
                placeholder="Select your country/region"
              >
                <option value="">Select your country/region</option>
                <option value="R'lyeh">R'lyeh</option>
                <option value="Fakeplace">Fakeplace</option>
                <option value="Badplace">Badplace</option>
              </CustomSelect>

              <CustomSelect
                label="State*"
                name="state"
                placeholder="Select your state"
              >
                <option value="">Select your state</option>
                <option value="Rohan">Rohan</option>
                <option value="Gondor">Gondor</option>
                <option value="Mordor">Mordor</option>
              </CustomSelect>

              <CustomInput
                label="ZIP code*"
                name="zipCode"
                type="text"
                placeholder="Enter your ZIP code"
              />
            </div>
          </article>
          <aside className="flex justify-between w-[320px]">
            <Button size="l" handler={() => navigate("../contacts")}>
              Previous step
            </Button>

            <Button size="l" type="submit">Submit order</Button>
          </aside>
        </Form>
      </Formik>
    </section>
  );
}
