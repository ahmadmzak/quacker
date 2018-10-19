import React from "react";
import { Form, Icon, Input, Button, Modal } from "antd";

const style = {
  container: {
    display: "flex"
  },
  icon: {
    fontSize: "2rem",
    width: "100%",
    color: "#1890ff"
  },
  modal: {
    marginTop: "18vh"
  },
  inputIcon: {
    color: "rgba(0,0,0,.25)"
  },
  buttonDiv: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "2rem 0"
  },
  button: {
    width: "30%",
    margin: "auto",
    fontWeight: "bold"
  },
  charLimit: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "-1.5rem 0.1rem 0 0"
  }
};

const Signup = ({
  values,
  errors,
  handleChange,
  handleSubmit,
  isSubmitting
}) => (
  <div style={style.container}>
    <Modal
      closable={false}
      visible={true}
      footer={null}
      title={<Icon type="twitter" style={style.icon} />}
      style={style.modal}
      mask={false}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          margin: "auto"
        }}
      >
        <h1>Create your account</h1>
        <Form.Item
          validateStatus={errors.name ? "error" : "success"}
          hasFeedback={errors.name || values.name ? true : false}
          help={errors.name}
        >
          <Input
            onChange={handleChange}
            maxLength={50}
            prefix={<Icon type="user" style={style.inputIcon} />}
            placeholder="Name"
            name="name"
            disabled={isSubmitting}
            value={values.name}
          />
        </Form.Item>
        <div style={style.charLimit}>
          <h5>{`${values.name.length}/50`}</h5>
        </div>

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
        <Form.Item
          validateStatus={errors.passwordRepeat ? "error" : "success"}
          hasFeedback={
            errors.passwordRepeat || values.passwordRepeat ? true : false
          }
          help={errors.passwordRepeat}
        >
          <Input
            onChange={handleChange}
            maxLength={50}
            prefix={<Icon type="lock" style={style.inputIcon} />}
            type="password"
            placeholder="Repeat Password"
            name="passwordRepeat"
            disabled={isSubmitting}
            value={values.passwordRepeat}
          />
        </Form.Item>
        <div style={style.buttonDiv}>
          <Button
            type="primary"
            htmlType="submit"
            loading={isSubmitting}
            disabled={isSubmitting}
            style={style.button}
          >
            Sign up
          </Button>
        </div>
      </Form>
    </Modal>
  </div>
);

export default Signup;
