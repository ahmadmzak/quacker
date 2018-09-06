import React from "react";
import { Link } from "react-router-dom";
import { Checkbox, Form, Icon, Input, Button, Modal } from "antd";

const style = {
  icon: {
    fontSize: "2rem",
    width: "100%",
    color: "#1890ff"
  },
  modal: { marginTop: "18vh" },
  form: { margin: "auto" },
  inputIcon: { color: "rgba(0,0,0,.25)" },
  loginBtn: { marginRight: "1rem", fontWeight: "bold" }
};

const Login = ({
  values,
  errors,
  handleChange,
  handleSubmit,
  isSubmitting
}) => (
  <Modal
    closable={false}
    visible={true}
    footer={null}
    title={<Icon type="yuque" style={style.icon} />}
    style={style.modal}
    mask={false}
  >
    <Form onSubmit={handleSubmit} style={style.form}>
      <h1>Log in to Quacker</h1>
      <Form.Item
        validateStatus={errors.email ? "error" : "success"}
        hasFeedback={errors.email || values.email ? true : false}
        help={errors.email}
      >
        <Input
          onChange={handleChange}
          maxLength={50}
          prefix={<Icon type="mail" style={style.inputIcon} />}
          placeholder="Email"
          name="email"
          disabled={isSubmitting}
          value={values.email}
        />
      </Form.Item>
      <Form.Item
        validateStatus={errors.password ? "error" : "success"}
        hasFeedback={errors.password || values.password ? true : false}
        help={errors.password}
      >
        <Input
          onChange={handleChange}
          maxLength={50}
          prefix={<Icon type="lock" style={style.inputIcon} />}
          type="password"
          placeholder="Password"
          name="password"
          disabled={isSubmitting}
          value={values.password}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
          style={style.loginBtn}
        >
          Log in
        </Button>
        <Checkbox>Remember me - </Checkbox>
        <Link to="/login">Forgot password?</Link>
      </Form.Item>
      <Form.Item>
        New to Quacker? <Link to="/signup">Sign up now</Link>
      </Form.Item>
    </Form>
  </Modal>
);

export default Login;
