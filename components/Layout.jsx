import styled from "styled-components"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <MyComponent>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

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
