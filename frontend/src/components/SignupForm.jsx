import React, { Component } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Signup from "./Signup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required."),
  email: yup
    .string()
    .email("Email must be valid.")
    .required("Email is required."),
  password: yup
    .string()
    .min(6, "Password must be atleast 6 characters.")
    .required("Password is required."),
  passwordRepeat: yup
    .string()
    .min(6, "Password must be atleast 6 characters.")
    .required("Please repeat password.")
});

class SignupForm extends Component {
  handleSubmit = (values, { resetForm, setErrors, setSubmitting }) => {
    if (values.password !== values.passwordRepeat) {
      setErrors({ passwordRepeat: "Passwords must match." });
    } else {
      // some async function
      setTimeout(() => {
        console.log(values);
        // if error
        // setError({ email: "Email already taken" })
        // else
        // resetForm()
        resetForm();
      }, 1000);
    }
    setSubmitting(false);
  };
  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordRepeat: ""
        }}
        validationSchema={validationSchema}
        component={Signup}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default SignupForm;
