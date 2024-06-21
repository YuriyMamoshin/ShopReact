import * as yup from "yup";

const phoneRules = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const nameRules = /^[a-z ,.'-]+$/i;
export const schemaContacts = yup.object().shape({
    firstName: yup.string().matches(nameRules, {message: "Please check if you added a correct name"}).required("Required"),
    lastName: yup.string().matches(nameRules, {message: "Please check if you added a correct name"}).required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    phone: yup.string().min(10).matches(phoneRules, {message: "Please add a valid phone number"}).required("Required"),

})