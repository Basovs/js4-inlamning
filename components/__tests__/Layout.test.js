import Enzyme, { shallow, mount } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

Enzyme.configure({ adapter: new Adapter() })

import Layout from "../Layout"

describe("<Layout/>", () => {
  it("renders correctly", () => {
    shallow(<Layout />)
  })

  it("correct meta tag", () => {
    const wrapper = shallow(<Layout />)

    expect(wrapper.find("meta").prop("name")).toEqual("viewport")
  })

  // it("main tag includes children prop", () => {
  //   const wrapper = shallow(<Layout />)

  //   expect(wrapper.find("main").text()).toEqual("viewport")
  // })
})
