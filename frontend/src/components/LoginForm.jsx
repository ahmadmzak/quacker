import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
  handleSubmit = async (values, { resetForm, setErrors, setSubmitting }) => {
    const data = await fetch("http://localhost:3000/users/1");
    const user = await data.json();
    const { history } = this.props;
    if (user.email === values.email && user.password === values.password) {
      resetForm();
      setTimeout(() => {
        history.push("/");
        this.props.handleLogin(true);
      }, 0);
    } else {
      setErrors({ password: "Email or password invalid." });
    }
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

export default withRouter(LoginForm);
