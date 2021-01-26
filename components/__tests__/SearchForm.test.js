import Enzyme, { shallow, mount } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

Enzyme.configure({ adapter: new Adapter() })

import SearchForm from "../SearchForm"

describe("<SearchForm/>", () => {
  it("renders correctly", () => {
    shallow(<SearchForm />)
  })

  it("input type is text", () => {
    const wrapper = shallow(<SearchForm />)

    expect(wrapper.find("input").prop("type")).toEqual("text")
  })

  it("correct meta tag", () => {
    const wrapper = shallow(<SearchForm />)

    expect(wrapper.find("input").prop("placeholder")).toEqual(
      "Atrast sludinājumu"
    )
  })

  it("isSearching initial state false?", () => {
    const wrapper = shallow(<SearchForm />)

    expect(wrapper.state.isSearching).toBe(false)
  })
})
