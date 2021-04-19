import React from "react";
import DishwasherDetailsPage, { DishwasherDetails } from "../../../src/pages/dishwasher/[productId]";
import { render, screen, within } from "@testing-library/react";

describe("Given we are on the Dishwasher Details Page", () => {
    describe("When there is product data", () => {
        const details: DishwasherDetails = {
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
            details: "<p>The Bosch Info here</p>",
            additionalServices: {
                includedServices: "2 year guarantee included",
            },
        };

        it("Then title should show", () => {
            render(<DishwasherDetailsPage details={details} />);

            expect(screen.getByText("Bosch Serie 2 SMS25EW00G Freestanding Dishwasher, White")).toBeInTheDocument();
        });

        it("Then dishwasher details should show", () => {
            render(<DishwasherDetailsPage details={details} />);

            expect(
                screen.getByAltText(
                    "Buy Bosch Serie 2 SMS25EW00G Freestanding Dishwasher, White Online at johnlewis.com"
                )
            ).toHaveAttribute("src", "//johnlewis.scene7.com/is/image/JohnLewis/237026151?");
            expect(screen.getByText("£379.00")).toBeInTheDocument();
            const productInfoBlock = screen.getByText("Product Information");
            expect(within(productInfoBlock.parentElement!).getByText("The Bosch Info here")).toBeInTheDocument();
            expect(screen.getByText("2 year guarantee included")).toBeInTheDocument();
        });
    });
});
