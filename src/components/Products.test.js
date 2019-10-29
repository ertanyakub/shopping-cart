import * as React from "react";
import { shallow } from "enzyme";
import Item from "./Products";

test("Item", () => {
  const el = shallow(
      <Item
      items={[
        {
          id: 1,
          img:
            "https://img.tesco.com/Groceries/pi/439/5449000000439/IDShot_225x225.jpg",
          offer: "Tree for two",
          price: 0.8,
          title: "coke",
          currency: "£",
          description:
            "Offer valid for delivery from 30/09/2019 until 16/11/2019"
        },
        {
          id: 2,
          img:
            "https://www.sainsburys.co.uk/wcsstore7.42.4/SainsburysStorefrontAssetStore/wcassets/product_images/media_888500_L.jpg",
          offer: null,
          price: 0.55,
          title: "bananas",
          currency: "£",
          description:
            "Offer valid for delivery from 30/09/2019 until 16/11/2019"
        },
        {
          id: 3,
          img:
            "https://www.sainsburys.co.uk/wcsstore7.42.4/ExtendedSitesCatalogAssetStore/images/catalog/productImages/23/0000000030823/0000000030823_L.jpeg",
          offer: null,
          price: 0.78,
          title: "broccoli",
          currency: "£",
          description:
            "Offer valid for delivery from 30/09/2019 until 16/11/2019"
        },
        {
          id: 4,
          img:
            "https://www.sainsburys.co.uk/wcsstore7.42.4/ExtendedSitesCatalogAssetStore/images/catalog/productImages/29/0000000045629/0000000045629_L.jpeg",
          offer: "2 for £1.00",
          price: 0.65,
          title: "carrots",
          currency: "£",
          description:
            "Offer valid for delivery from 30/09/2019 until 16/11/2019"
        },
        {
          id: 5,
          img:
            "https://www.sainsburys.co.uk/wcsstore7.42.4/ExtendedSitesCatalogAssetStore/images/catalog/productImages/71/5000157024671/5000157024671_L.jpeg",
          offer: "2 for £1.00",
          price: 0.58,
          title: "beans",
          currency: "£",
          description:
            "Offer valid for delivery from 30/09/2019 until 16/11/2019"
        },
        {
          id: 6,
          img:
            "https://img.tesco.com/Groceries/pi/926/5031021883926/IDShot_225x225.jpg",
          offer: "Tree for two",
          price: 0.7,
          title: "limes",
          currency: "£",
          description:
            "Offer valid for delivery from 30/09/2019 until 16/11/2019"
        },
        {
          id: 7,
          img:
            "https://www.sainsburys.co.uk/wcsstore7.42.4/SainsburysStorefrontAssetStore/wcassets/product_images/media_79_L.jpg",
          offer: null,
          price: 0.85,
          title: "oranges",
          currency: "£",
          description:
            "Offer valid for delivery from 30/09/2019 until 16/11/2019"
        },
        {
          id: 8,
          img:
            "https://www.sainsburys.co.uk/wcsstore7.42.4/SainsburysStorefrontAssetStore/wcassets/product_images/media_1197815_L.jpg",
          offer: null,
          price: 0.88,
          title: "pear",
          currency: "£",
          description:
            "Offer valid for delivery from 30/09/2019 until 16/11/2019"
        }
      ]}
    />
  );
  expect(el).toMatchSnapshot();
});
