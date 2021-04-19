import React from "react";
import DishwashersList, { Dishwasher } from "./DishwashersList";
import { render, screen } from "@testing-library/react";

describe("DishwashersList List", () => {
    it("should display No dishwashers available", () => {
        render(<DishwashersList dishwashers={[]} />);

        expect(screen.getByText(/No dishwashers available/)).toBeInTheDocument();
    });

    it("given one dishwasher it should display it", () => {
        const dishwasher: Dishwasher = {
            productId: "1955287",
            prize: {
                now: "397.00",
            },
            title: "Bosch Serie 2 SMV40C30GB Fully Integrated Dishwasher",
            image: "//johnlewis.scene7.com/is/image/JohnLewis/234378764?",
        };

        render(<DishwashersList dishwashers={[dishwasher]} />);

        const dishwasherElement = screen.getByRole("article");
        expect(dishwasherElement).toHaveTextContent("Bosch Serie 2 SMV40C30GB Fully Integrated Dishwasher");
        expect(dishwasherElement).toHaveTextContent("£397.00");
        expect(screen.getByAltText("Bosch Serie 2 SMV40C30GB Fully Integrated Dishwasher")).toHaveAttribute(
            "src",
            "//johnlewis.scene7.com/is/image/JohnLewis/234378764?"
        );
    });
});
