import { Alert, Checkbox, Drawer, Image } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { Header } from "antd/lib/layout/layout";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoImg from "./img/h_logo.png";
import SubMenu from "antd/lib/menu/SubMenu";
const Body = styled.div``;

const options = [
  { label: "메인메뉴", value: "mainMenu" },
  { label: "반찬", value: "subMenu" },
];
const LogoImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 80%;
  }
`;
const Button = styled.button`
  border: none;
  width: 100%;
  height: 50px;
  background-color: #ffd43b;
  color: #fff9db;
  font-weight: bold;
  font-size: 2rem;
`;
function App() {
  const Init: CheckboxValueType[] = [];
  const [ResMenu, setResMenu] = useState("");
  const [CheckValue, setCheckValue] = useState(Init);
  const [Visible, setVisible] = useState(false);
  const [MainMenu, setMainMenu] = useState(false);
  const [SubMenu, setSubMenu] = useState(false);
  const onClick = () => {
    //setResMenu()
    setMainMenu(CheckValue.includes("mainMenu") ? true : false);
    setSubMenu(CheckValue.includes("subMenu") ? true : false);

    reverseVisible();
  };
  const reverseVisible = () => {
    setVisible(!Visible);
  };
  return (
    <>
      <Body>
        <Header style={{ background: "#ffe066" }}>
          <LogoImgContainer>
            <img src={logoImg} alt="a" />
          </LogoImgContainer>
        </Header>
        <div style={{ margin: "5%" }}>
          <Alert
            type="warning"
            message="한솥 메뉴 선택"
            style={{ marginTop: "10px" }}
          />
          <Checkbox.Group
            options={options}
            defaultValue={["메인메뉴"]}
            onChange={setCheckValue}
            style={{ marginTop: "10px" }}
          />
          <div style={{ marginTop: "10px" }}>
            <Button onClick={onClick}>Click Me!</Button>
          </div>
          <Drawer
            title="Select Menu"
            placement="bottom"
            onClose={reverseVisible}
            visible={Visible}
            height="70%"
          >
            {MainMenu && <p>Main Menu</p>}
            {SubMenu && <p>Sub Menu</p>}
            {SubMenu || MainMenu || <p>체크박스를 1개이상 체크!</p>}
          </Drawer>
        </div>
      </Body>
    </>
  );
}

export default App;
