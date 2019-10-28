import React from "react"
import { mount } from "enzyme"
import Item from "./Item"

describe("<Item/>", () => {
    const item = { title: "Coke", price: 0.8 }
    const productsItem = mount(<Item item={item} />)
    it("Renders without crashing", () => {
        expect(productsItem.length).toEqual(1)
    })

    it("Renders the title and the price from the prop", () => {
        expect(productsItem.find("h2").text()).toEqual(item.title);
    })

    it("Renders a add button", () => {
        expect(productsItem.find("button").text()).toEqual("Add to Cart")
    })
})
