import { Alert, Checkbox, Drawer } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { Header } from "antd/lib/layout/layout";
import "antd/dist/antd.css";
import React, { useState } from "react";
import styled from "styled-components";
import logoImg from "./img/h_logo.png";
import { getMainMenu, getSubMenu } from "./Menus/HansotMenu";

const Body = styled.div``;

const options = [
  { label: "메인메뉴", value: "mainMenu" },
  { label: "서브메뉴", value: "subMenu" },
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
  const [CheckValue, setCheckValue] = useState(Init);
  const [Visible, setVisible] = useState(false);
  const [MainMenu, setMainMenu] = useState(false);
  const [SubMenu, setSubMenu] = useState(false);
  const [MainMenuValue, setMainMenuValue] = useState(getMainMenu());
  const [SubMenuValue, setSubMenuValue] = useState(getSubMenu());

  const onClick = () => {
    //setResMenu()
    setMainMenu(CheckValue.includes("mainMenu") ? true : false);
    MainMenu && setMainMenuValue(getMainMenu());
    setSubMenu(CheckValue.includes("subMenu") ? true : false);
    SubMenu && setSubMenuValue(getSubMenu());
    reverseVisible();
  };
  const getPrice = () => {
    let res = 0;
    res += MainMenu ? MainMenuValue.price : 0;
    res += SubMenu ? SubMenuValue.price : 0;
    return res;
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
            {MainMenu && (
              <p>{`메인 메뉴 : ${MainMenuValue.menu} , 가격 : ${MainMenuValue.price}`}</p>
            )}
            {SubMenu && (
              <p>{`서브 메뉴 : ${SubMenuValue.menu} , 가격 : ${SubMenuValue.price}`}</p>
            )}
            {SubMenu || MainMenu ? (
              <p>{`합계 : ${getPrice()}`} </p>
            ) : (
              <p>체크박스를 1개이상 체크!</p>
            )}
          </Drawer>
        </div>
      </Body>
    </>
  );
}

export default App;
