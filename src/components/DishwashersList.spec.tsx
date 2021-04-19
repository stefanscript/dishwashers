import React from "react";
import DishwashersList, { Dishwasher } from "./DishwashersList";
import { render, screen, within } from "@testing-library/react";

describe("DishwashersList List", () => {
    const boschDishwasher = {
        productId: "1955287",
        prize: {
            now: "397.00",
        },
        title: "Bosch Serie 2 SMV40C30GB Fully Integrated Dishwasher",
        image: "//johnlewis.scene7.com/is/image/JohnLewis/234378764?",
    };

    const siemensDishwasher = {
        productId: "4189551",
        prize: {
            now: "549.00",
        },
        title: "Siemens iQ300 SN236W03MG Freestanding Dishwasher, White",
        image: "//johnlewis.scene7.com/is/image/JohnLewis/238008972?",
    };

    it("should display No dishwashers available", () => {
        render(<DishwashersList dishwashers={[]} />);

        expect(screen.getByText("No dishwashers available")).toBeInTheDocument();
    });

    it("should display one dishwasher", () => {
        render(<DishwashersList dishwashers={[boschDishwasher]} />);

        const dishwasherElement = screen.getByRole("article");
        expect(dishwasherElement).toHaveTextContent("Bosch Serie 2 SMV40C30GB Fully Integrated Dishwasher");
        expect(dishwasherElement).toHaveTextContent("£397.00");
        expect(
            within(dishwasherElement).getByAltText("Bosch Serie 2 SMV40C30GB Fully Integrated Dishwasher")
        ).toHaveAttribute("src", "//johnlewis.scene7.com/is/image/JohnLewis/234378764?");
    });

    it("should display multiple dishwashers", () => {
        render(<DishwashersList dishwashers={[boschDishwasher, siemensDishwasher]} />);

        expect(screen.getAllByRole("article")).toHaveLength(2);
        expect(screen.getByText("Bosch Serie 2 SMV40C30GB Fully Integrated Dishwasher")).toBeInTheDocument();
        expect(screen.getByText("Siemens iQ300 SN236W03MG Freestanding Dishwasher, White")).toBeInTheDocument();
    });

    it("should not display the 'no dishwashers available' message when more than one dishwasher", () => {
        render(<DishwashersList dishwashers={[boschDishwasher]} />);

        expect(screen.queryByText("No dishwashers available")).not.toBeInTheDocument();
    });
});
