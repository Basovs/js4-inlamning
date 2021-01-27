import React from "react"

import Enzyme, { shallow, mount } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

Enzyme.configure({ adapter: new Adapter() })

import BtnFilled from "../BtnFilled"

describe("<BtnFilled/>", () => {
  it("Renders correctly", () => {
    shallow(<BtnFilled title="TestTitle" />)
  })

  it("Title renders", () => {
    const wrapper = mount(<BtnFilled title="TestTitle" />)
    expect(wrapper.text()).toEqual("TestTitle")
  })
})
