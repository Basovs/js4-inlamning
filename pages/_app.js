import { createGlobalStyle, ThemeProvider } from "styled-components"
import SearchContextProvider from "../contexts/SearchContextProvider"

import Layout from "../components/Layout"

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html{
    --body-background-color:#F4F7F6;
    --stripe-color:#F0F0F0;
    --text-color:#1C1F24;
    --light-gray-color:#F2F2F2;
    --mid-gray-color:#A1A3A5;
    --dark-gray-color:#231f20;
  }

  h2{
    margin: 30px 0;
  }
  p{
    margin: 10px 0;
  }

  input[type=submit]{
      cursor: pointer;
    }

    textarea{
      padding:15px 20px;
      block-size:unset;
    }

  ul, ol{
    list-style:none;
  }
  a{
    text-decoration:none;
    color:#000;
  }

  select {
    cursor: pointer;
  }


  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-inline-size: 100%;
  }

  button{
    border:none;
    cursor: pointer;
    outline:none;
    font-family:inherit;
    font-size:14px;
    color:black;
    background-color:transparent;
    display:block;
  }

  input,textarea{
    outline:none;
    font-family:inherit;
    font-size:inherit;
    color:black;
    display:block;
    border:none;
    appearance: none; /* iOS */
    border-radius: 0; /* iOS */
    background-color: var(--light-gray-color);
    border: 1px solid var(--light-gray-color);
    block-size:52px;
    padding: 0 20px;
    inline-size: 100%;
    font-size: 14px;
    :focus {
      border: 1px solid var(--dark-gray-color);
    }
    ::placeholder {
      color: var(--mid-gray-color);
      opacity: 1; /* Firefox */
      font-weight: 300;
    }
    
  }

  ::-webkit-scrollbar {
    width: 16px;
    cursor: pointer;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #181818;
    cursor: pointer;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(145deg, #72f, #c1b);
    cursor: pointer;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
    cursor: pointer;
  }
`
const theme = {
  colors: {
    bright: {
      primary: {
        title: "#0E0E0E",
        background: "#fff",
      },
      secondary: {
        title: "#202020",
      },
    },
    dark: {
      primary: {
        title: "#fff",
        background: "#0E0E0E",
      },
      secondary: {
        title: "",
      },
    },
  },
}

function Index({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SearchContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SearchContextProvider>
      </ThemeProvider>
    </>
  )
}

export default Index
