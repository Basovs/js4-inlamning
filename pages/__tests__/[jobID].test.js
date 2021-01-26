import React from "react"

// shalow for deepsearch, mount for current wrapper
import Enzyme, { shallow, mount } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

Enzyme.configure({ adapter: new Adapter() })

import SpecificJobPage from "../[jobID]"

describe("<SpecificJobPage/>", () => {
  const payload = {
    type: "type",
    title: "title",
    company_url: "https://www.company.url",
    description: "<p>description</p>",
    company_logo: "company_logo",
  }

  it("renders correctly", () => {
    shallow(<SpecificJobPage job={payload} />)
  })

  it("Check if type is in 'strong' tag", () => {
    const wrapper = shallow(<SpecificJobPage job={payload} />)
    expect(wrapper.find("strong").text()).toEqual("type")
  })

  it("Title in a 'h2' tag", () => {
    const wrapper = shallow(<SpecificJobPage job={payload} />)
    expect(wrapper.find("h2").text()).toEqual("title")
  })

  it("company_url in 'a' tag", () => {
    const wrapper = shallow(<SpecificJobPage job={payload} />)

    expect(wrapper.find("a").prop("href")).toEqual("https://www.company.url")
  })

  it("description in 'div' tag", () => {
    const wrapper = shallow(<SpecificJobPage job={payload} />)

    expect(wrapper.find("div").prop("dangerouslySetInnerHTML")).toEqual({
      __html: "<p>description</p>",
    })
  })

  it("company_logo src atribute gets right value", () => {
    const wrapper = shallow(<SpecificJobPage job={payload} />)

    expect(wrapper.find("img").prop("src")).toEqual("company_logo")
  })
})
