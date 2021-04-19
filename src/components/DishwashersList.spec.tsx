import React from "react";
import DishwashersList, { Dishwasher } from "./DishwashersList";
import { render, screen, within } from "@testing-library/react";

describe("DishwashersList List", () => {
    it("should display No dishwashers available", () => {
        render(<DishwashersList dishwashers={[]} />);

        expect(screen.getByText("No dishwashers available")).toBeInTheDocument();
    });

    describe("With one dishwasher", () => {
        let dishwasher: Dishwasher = {
            productId: "1955287",
            prize: {
                now: "397.00",
            },
            title: "Bosch Serie 2 SMV40C30GB Fully Integrated Dishwasher",
            image: "//johnlewis.scene7.com/is/image/JohnLewis/234378764?",
        };

        it("should display one dishwasher", () => {
            render(<DishwashersList dishwashers={[dishwasher]} />);

            const dishwasherElement = screen.getByRole("article");
            expect(dishwasherElement).toHaveTextContent("Bosch Serie 2 SMV40C30GB Fully Integrated Dishwasher");
            expect(dishwasherElement).toHaveTextContent("£397.00");
            expect(
                within(dishwasherElement).getByAltText("Bosch Serie 2 SMV40C30GB Fully Integrated Dishwasher")
            ).toHaveAttribute("src", "//johnlewis.scene7.com/is/image/JohnLewis/234378764?");
        });

        it("should not display the 'no dishwashers available' message", () => {
            render(<DishwashersList dishwashers={[dishwasher]} />);

            expect(screen.queryByText("No dishwashers available")).not.toBeInTheDocument();
        });
    });
});
