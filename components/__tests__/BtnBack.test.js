import React from "react"

import { BrowserRouter, Route } from "react-router-dom"

import Enzyme, { shallow } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

Enzyme.configure({ adapter: new Adapter() })

import BtnBack from "../BtnBack"

describe("<BtnBack/>", () => {
  it("Renders correctly", () => {
    shallow(
      <BrowserRouter>
        <BtnBack />
      </BrowserRouter>
    )
  })

  it("onClick function works", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <BtnBack isHomeDummy={true} />
      </BrowserRouter>
    )

    expect(wrapper.find("a").props().onClick())
  })
})
