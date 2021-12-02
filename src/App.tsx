import { Alert, Checkbox, Drawer } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { Header } from "antd/lib/layout/layout";
import "antd/dist/antd.css";
import React, { useState } from "react";
import styled from "styled-components";
import logoImg from "./img/h_logo.png";
import { getMainMenu, getSubMenu, TypeMenu } from "./Menus/HansotMenu";
import MenuItem from "./components/MenuItem";

const Body = styled.div``;

const options = [
  { label: "신제품/할인", value: "eventMenu" },
  { label: "프리미엄·고메이", value: "premiumMenu" },
  { label: "사각도시락", value: "squareMenu" },
  { label: "보울도시락", value: "bowlMenu" },
  { label: "사이드메뉴", value: "subMenu" },
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
const TotalContainer = styled.div`
  @media screen and (min-width: 500px) {
    max-width: 810px;
  }
  background: #e3e3e3;
  text-align: center;
  max-width: 400px;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 5px 0;
`;
const SelectItemContainer = styled.div`
  @media screen and (min-width: 500px) {
    display: flex;
    div {
      & + div {
        margin-left: 10px;
      }
    }
  }
`;

function App() {
  const Init: CheckboxValueType[] = [];
  const initialMenu: TypeMenu = { price: 0, imgPath: "", menu: "" };
  const [CheckValue, setCheckValue] = useState(Init);
  const [Visible, setVisible] = useState(false);
  const [MainMenu, setMainMenu] = useState(false);
  const [SubMenu, setSubMenu] = useState(false);
  const [MainMenuValue, setMainMenuValue] = useState(initialMenu);
  const [SubMenuValue, setSubMenuValue] = useState(initialMenu);

  const onClick = () => {
    let eventMenu = false;
    let premiumMenu = false;
    let squareMenu = false;
    let bowlMenu = false;

    let mainMenuState = false;
    let subMenuState = false;
    setSubMenu(subMenuState);
    setMainMenu(mainMenuState);
    if (CheckValue.includes("eventMenu")) {
      eventMenu = true;
    }
    if (CheckValue.includes("premiumMenu")) {
      premiumMenu = true;
    }
    if (CheckValue.includes("squareMenu")) {
      squareMenu = true;
    }
    if (CheckValue.includes("bowlMenu")) {
      bowlMenu = true;
    }
    if (CheckValue.includes("subMenu")) {
      subMenuState = true;
      setSubMenu(subMenuState);
    }

    //setResMenu()

    if (eventMenu || premiumMenu || squareMenu || bowlMenu) {
      mainMenuState = true;
      setMainMenu(mainMenuState);
    }

    if (mainMenuState) {
      const mainMenuDataSet = getMainMenu(
        eventMenu,
        premiumMenu,
        squareMenu,
        bowlMenu
      );
      setMainMenuValue(
        mainMenuDataSet[Math.floor(Math.random() * mainMenuDataSet.length)]
      );
    }

    if (subMenuState) {
      const mainSubMenuDataSet = getSubMenu();
      setSubMenuValue(
        mainSubMenuDataSet[
          Math.floor(Math.random() * mainSubMenuDataSet.length)
        ]
      );
    }
    reverseVisible();
  };
  const getPrice = () => {
    let res = 0;
    res += MainMenu ? MainMenuValue.price : 0;
    res += SubMenu ? SubMenuValue.price : 0;
    let strTemp = res.toString();
    const strPrice = `${strTemp.slice(0, strTemp.length - 3)},${strTemp.slice(
      strTemp.length - 3,
      strTemp.length
    )}`;
    return strPrice;
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
            <SelectItemContainer>
              {MainMenu && MenuItem(MainMenuValue)}
              {SubMenu && MenuItem(SubMenuValue)}
            </SelectItemContainer>
            {SubMenu || MainMenu ? (
              <TotalContainer>{`합계 : ${getPrice()}원`} </TotalContainer>
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
