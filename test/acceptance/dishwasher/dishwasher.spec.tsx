import React from "react";
import DishwasherDetailsPage, { DishwasherDetailsInterface } from "../../../src/pages/dishwasher/[productId]";
import { render, screen, within } from "@testing-library/react";

describe("Given we are on the Dishwasher Details Page", () => {
    describe("When there is product data", () => {
        const details: DishwasherDetailsInterface = {
            title: "Bosch Serie 2 SMS25EW00G Freestanding Dishwasher, White",
            media: {
                images: {
                    altText: "Buy Bosch Serie 2 SMS25EW00G Freestanding Dishwasher, White Online at johnlewis.com",
                    urls: [
                        "//johnlewis.scene7.com/is/image/JohnLewis/237026151?",
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
                now: "379.00",
            },
            details: {
                productInformation: "<p>The Bosch Info here</p>",
            },
            features: [
                { name: "Delay Start", value: "Yes - up to 24 hours" },
                { name: "Program Sequence Indicator", value: "Yes" },
                { name: "Delicate Wash", value: "Yes" },
            ],
            additionalServices: {
                includedServices: "2 year guarantee included",
            },
            code: "81701226",
            displaySpecialOffer: "Save £60 (price includes saving)",
        };

        it("Then title should show", () => {
            render(<DishwasherDetailsPage details={details} />);

            expect(screen.getByText("Bosch Serie 2 SMS25EW00G Freestanding Dishwasher, White")).toBeInTheDocument();
        });

        it("Then the dishwasher details should show", () => {
            render(<DishwasherDetailsPage details={details} />);

            expect(
                screen.getByAltText(
                    "Buy Bosch Serie 2 SMS25EW00G Freestanding Dishwasher, White Online at johnlewis.com"
                )
            ).toHaveAttribute("src", "//johnlewis.scene7.com/is/image/JohnLewis/237026151?");
            expect(screen.getByText("£379.00")).toBeInTheDocument();
            expect(screen.getByText("The Bosch Info here")).toBeInTheDocument();
            expect(screen.getByText("2 year guarantee included")).toBeInTheDocument();
            expect(screen.getByText("Product code: 81701226")).toBeInTheDocument();
            expect(screen.getByText("Save £60 (price includes saving)")).toBeInTheDocument();
            const productSpec = screen.getByText("Product Specification").parentElement!;
            expect(productSpec).toHaveTextContent("Delay Start Yes - up to 24 hours");
            expect(productSpec).toHaveTextContent("Program Sequence Indicator Yes");
            expect(productSpec).toHaveTextContent("Delicate Wash Yes");
        });
    });
});
