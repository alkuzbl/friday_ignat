import React from "react";

import { Button } from "./Button";
import Checkbox from "./Checkbox/Checkbox";
import { Form } from "./Form/Form";

import { Input } from "./Input/Input";

const styleForCommonPage = { backgroundColor: "#e3e3e3", padding: "10px 100px" };
const styleForButtonContainer = { display: "inline-flex" };
export const CommonComponents = () => {
  const onClickAlertMessage = () => {
    // eslint-disable-next-line no-alert
    alert("Button click");
  };
  return (
    <div style={styleForCommonPage}>
      <h3>Common components</h3>
      <div style={styleForButtonContainer}>
        <div>
          <h4>Button</h4>
          <Button type="submit" title="Click me" onClick={onClickAlertMessage} />
        </div>
        <div>
          <h4>CheckBox</h4>
          <Checkbox />
        </div>
      </div>
      <div>
        <h4>Input</h4>
        <Input type="text" value="" />
      </div>
      <div>
        <h4>Form</h4>
        <Form />
      </div>
    </div>
  );
};
