import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <MyComponent>
      <header />
      <main>{children}</main>
    </MyComponent>
  )
}

export default Layout

const MyComponent = styled.div`
  header {
    position: fixed;
    inline-size: 100%;
    block-size: 72px;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.9) 90%
    );
  }
  main {
    min-block-size: 101vh;
  }
`
