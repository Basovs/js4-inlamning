import { useRouter } from "next/router"

const BtnBack = () => {
  const router = useRouter()
  const isHome = router.pathname === "/"

  const goBack = e => {
    e.preventDefault()
    router.back()
  }

  return (
    // Div for keeping its place in layout
    <>
      {!isHome && (
        <a href="#" onClick={goBack}>
          {"<"} Back
        </a>
      )}
    </>
  )
}

export default BtnBack
