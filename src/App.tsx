import { Checkbox, Image } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { Header } from "antd/lib/layout/layout";
import "antd/dist/antd.css";
import React from "react";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
`;
function onChange(checkedValues: CheckboxValueType[]) {
  console.log("checked = ", checkedValues.join(" "));
}

const options = [
  { label: "메인메뉴", value: "mainMenu" },
  { label: "반찬", value: "subMenu" },
];
function App() {
  return (
    <>
      <Body>
        <Header>
          <img src="./img/h_logo.png" alt="a" />
        </Header>
        <Checkbox.Group
          options={options}
          defaultValue={["메인메뉴"]}
          onChange={onChange}
        />
      </Body>
    </>
  );
}

export default App;
