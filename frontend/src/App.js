import './App.css';
import {
  Col,
  Row,
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
} from "antd";
import "antd/dist/antd.min.css";
import React from "react";

const optionsType = [
  { value: "Male", text: "Male" },
  { value: "Female", text: "Female" },
  { value: "Other", text: "Other" },
];

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

function App() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (value) => {
    console.log("changed", value);
  };

  return (
    <div className="App">
      <div className="center">
        <h3>Form Validation Project</h3>
      </div>
      <Form
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Age">
          <InputNumber min={1} max={99} onChange={onChange} />
        </Form.Item>

        <Form.Item label="Gender">
          <Select>
            {optionsType.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.text}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Occupation" name="occupation">
          <Input />
        </Form.Item>

        <Form.Item label="Birth Date">
          <DatePicker />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
