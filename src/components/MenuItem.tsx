import { Image } from "antd";
import React from "react";
import styled from "styled-components";

type TypeMenuItem = {
  menu: string;
  price: number;
  imgPath: string;
};
const MenuContainer = styled.div`
  background: #e5e5e5;
  text-align: center;
  max-width: 400px;
  .title {
    font-weight: bold;
    font-size: 1.3rem;
  }
  .price {
    font-size: 1.025rem;
  }
  margin-bottom: 10px;
`;

function MenuItem(props: TypeMenuItem) {
  const { menu, price, imgPath } = props;
  return (
    <MenuContainer>
      <Image src={imgPath} style={{ maxWidth: "400px" }} />
      <div className="title">{menu}</div>
      <div className="price">{price}원</div>
    </MenuContainer>
  );
}

export default MenuItem;
