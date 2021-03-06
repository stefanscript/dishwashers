import React from "react";
import DishwashersList, { Dishwasher } from "./DishwashersList";
import { render, screen, within } from "@testing-library/react";

describe("DishwashersList List", () => {
    const boschDishwasher: Dishwasher = {
        productId: "1955287",
        price: {
            now: "397.00",
        },
        title: "Bosch Serie 2 SMV40C30GB Fully Integrated Dishwasher",
        image: "//johnlewis.scene7.com/is/image/JohnLewis/234378764?",
    };

    const siemensDishwasher: Dishwasher = {
        productId: "4189551",
        price: {
            now: "549.00",
        },
        title: "Siemens iQ300 SN236W03MG Freestanding Dishwasher, White",
        image: "//johnlewis.scene7.com/is/image/JohnLewis/238008972?",
    };

    it("should display No dishwashers available", () => {
        render(<DishwashersList dishwashers={[]} />);

        expect(screen.getByText("No dishwashers available")).toBeInTheDocument();
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
