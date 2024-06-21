import * as yup from "yup";

const zipCodeRules = /^\d{5}(?:[-\s]\d{4})?$/;
export const schemaShipping = yup.object().shape({
    address: yup.string().min(3, "This field needs to be at least 3 characters long").required("Required"),
    apartment: yup.string().min(2, "This field needs to be at least 2 characters long"),
    city: yup.string().min(3, "This field needs to be at least 3 characters long").required("Required"),
    region: yup.string().oneOf(["R'lyeh", "Fakeplace", "Badplace"], "Please select the region").required("Required"),
    state: yup.string().oneOf(["Rohan", "Gondor", "Mordor"], "Please select the state").required("Required"),
    zipCode: yup.string().matches(zipCodeRules, {message: "Please check if you added a correct ZIP code"}).required("Required"),

})