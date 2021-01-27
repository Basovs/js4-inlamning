import Enzyme, { shallow } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

Enzyme.configure({ adapter: new Adapter() })

import JobList from "../JobList"

describe("<JobList/>", () => {
  it("Renders correctly", () => {
    shallow(<JobList />)
  })
})
