import { useRouter } from "next/router"
import styled from "styled-components"

const BtnBack = ({ isHomeDummy }) => {
  const router = useRouter()
  const isHome = router.pathname === "/"

  const goBack = e => {
    e.preventDefault()
    router.back()
  }

  return (
    // Div for keeping its place in layout
    <MyComponent>
      {(!isHome || isHomeDummy) && (
        <a href="#" onClick={goBack}>
          {"<"} Back
        </a>
      )}
    </MyComponent>
  )
}

export default BtnBack

const MyComponent = styled.div`
  margin: 20px 0;
`
