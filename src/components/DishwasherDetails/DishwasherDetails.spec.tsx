import React from "react";
import DishwasherDetails from "./DishwasherDetails";
import { render, screen } from "@testing-library/react";
import { DishwasherDetailsInterface } from "../../pages/dishwasher/[productId]";

describe("DishwasherDetails", () => {
    const details: DishwasherDetailsInterface = {
        title: "Bosch Serie 3, White",
        media: {
            images: {
                altText: "Buy Bosch Serie 3, White Online",
                urls: [
                    "//johnlewis.scene7.com/is/image/JohnLewis/22222222",
                    "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt1?",
                    "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt2?",
                    "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt3?",
                    "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt4?",
                    "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt5?",
                    "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt10?",
                ],
            },
        },
        price: {
            now: "1510.00",
        },
        details: {
            productInformation: "<p>The Bosch Series 3 Info here</p>",
        },
        features: [
            { name: "Noise level", value: "Not even the dogs can hear it" },
            { name: "Digital Display", value: "Yes" },
            { name: "Spins", value: "Yes" },
        ],
        additionalServices: {
            includedServices: "20 year guarantee included",
        },
        code: "81700007",
        displaySpecialOffer: "Save £400 (price includes saving)",
    };

    it("renders the image", () => {
        render(<DishwasherDetails details={details} />);

        expect(
            screen.getByAltText("Buy Bosch Serie 3, White Online")
        ).toHaveAttribute("src", "//johnlewis.scene7.com/is/image/JohnLewis/22222222");
    });
});
