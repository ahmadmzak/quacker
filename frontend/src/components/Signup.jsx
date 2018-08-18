import React from "react";
import { Form, Icon, Input, Button, Modal } from "antd";

const Signup = ({
  values,
  errors,
  handleChange,
  handleSubmit,
  isSubmitting
}) => (
  <div style={{ display: "flex" }}>
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
        <h1>Create your account</h1>
        <Form.Item
          validateStatus={errors.name ? "error" : "success"}
          hasFeedback={errors.name || values.name ? true : false}
          help={errors.name}
        >
          <Input
            onChange={handleChange}
            maxLength={50}
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Name"
            name="name"
            disabled={isSubmitting}
            value={values.name}
          />
        </Form.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "-1.5rem 0.1rem 0 0"
          }}
        >
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
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Repeat Password"
            name="passwordRepeat"
            disabled={isSubmitting}
            value={values.passwordRepeat}
          />
        </Form.Item>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            margin: "2rem 0"
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            loading={isSubmitting}
            disabled={isSubmitting}
            style={{ width: "30%", margin: "auto", fontWeight: "bold" }}
          >
            Sign up
          </Button>
        </div>
      </Form>
    </Modal>
  </div>
);

export default Signup;
