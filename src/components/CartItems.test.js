import React from "react"
import { mount } from "enzyme"
import CartItems from "./CartItems"

describe("<CartItems/>", () => {
    const item = { title: "Coke", quantity: 3 }
    const cartListItem = mount(<CartItems item={item}/>)
    it("Renders without crashing", () => {
        expect(cartListItem.length).toEqual(1)
    })

    it("Renders the title and the quantity from the prop", () => {
        expect(cartListItem.find("h2").text()).toEqual(item.title)
    })

    it("Renders a remove button", () => {
        expect(cartListItem.find("button").text()).toEqual("x")
    })
})