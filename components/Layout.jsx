import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <MyComponent>
      <main>{children}</main>
    </MyComponent>
  )
}

export default Layout

const MyComponent = styled.div`
  main {
    min-block-size: 101vh;
  }
`
