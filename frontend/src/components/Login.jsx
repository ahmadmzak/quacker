import React from "react";
import { Link } from "react-router-dom";
import { Checkbox, Form, Icon, Input, Button, Modal } from "antd";

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
    title={
      <Icon
        type="yuque"
        style={{
          fontSize: "2rem",
          width: "100%",
          color: "#1890ff"
        }}
      />
    }
    style={{ marginTop: "18vh" }}
    mask={false}
  >
    <Form
      onSubmit={handleSubmit}
      style={{
        margin: "auto"
      }}
    >
      <h1>Log in to Quacker</h1>
      <Form.Item
        validateStatus={errors.email ? "error" : "success"}
        hasFeedback={errors.email || values.email ? true : false}
        help={errors.email}
      >
        <Input
          onChange={handleChange}
          maxLength={50}
          prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
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
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
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
          style={{ marginRight: "1rem", fontWeight: "bold" }}
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
