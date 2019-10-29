import * as React from "react"
import { shallow } from "enzyme"
import App from "./App"

test("Renders without crashing", () => {
    const app = shallow(<App />)
    expect(app).toMatchSnapshot();
})