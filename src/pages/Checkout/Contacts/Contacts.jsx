import Heading from "pages/Checkout/Heading/Heading";
import { Formik, Form } from "formik";
import Button from "src/components/Button/Button";
import { schemaContacts } from "src/schemas/schemaContacts";
import CustomInput from "src/components/CustomInput/CustomInput";
import { addContacts } from "pages/Checkout/Contacts/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { goToNextStage } from "src/pages/Shop/shopSlice";

export default function Contacts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shoppingStage = useSelector((state) => state.shop.shoppingStage);

  return (
    <section>
      <Heading>Contact information</Heading>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        }}
        validationSchema={schemaContacts}
        onSubmit={(values) => {
          dispatch(addContacts(values));
          navigate("../shipping");
          dispatch(goToNextStage(3));
        }}
      >
        <Form>
          <article className="h-[256px] md:h-[176px] w-[95vw] lg:w-[960px] mb-8 p-4 md:pl-8 flex flex-col justify-evenly bg-white rounded-lg">
            <div className="flex flex-col md:flex-row">
              <CustomInput
                label="First name*"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
              />
              <CustomInput
                label="Last name*"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
            <div className="flex flex-col md:flex-row">
              <CustomInput
                label="Email*"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <CustomInput
                label="Phone*"
                name="phone"
                type="text"
                placeholder="Enter your phone"
              />
            </div>
          </article>

          <aside className="flex justify-between w-[320px]">
            <Button size="l" handler={() => navigate("../cart")}>
              Previous step
            </Button>

            <Button
              size="l"
              type="submit"
            >
              Next step{" "}
            </Button>
          </aside>
        </Form>
      </Formik>
    </section>
  );
}
