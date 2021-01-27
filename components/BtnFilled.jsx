import styled from "styled-components"

const BtnFilled = ({ title }) => {
  return <MyBtn>{title || "button"}</MyBtn>
}

export default BtnFilled

const MyBtn = styled.button`
  background-color: var(--dark-gray-color);
  font-weight: bold;
  letter-spacing: 0.2px;
  color: #fff;
  padding: 0 32px;
  block-size: 52px;
`
