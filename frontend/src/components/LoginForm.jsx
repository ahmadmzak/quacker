import React, { Component } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Login from "./Login";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid.")
    .required("Email is required."),
  password: yup
    .string()
    .min(6, "Password must be atleast 6 characters.")
    .required("Password is required.")
});

class LoginForm extends Component {
  handleSubmit = (values, { resetForm, setErrors, setSubmitting }) => {
    // some async function
    setTimeout(() => {
      console.log(values);
      // if error
      // setError({ email: "Email already taken" })
      // else
      // resetForm()
      resetForm();
    }, 1000);
    setSubmitting(false);
  };
  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={validationSchema}
        component={Login}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default LoginForm;
