import React from "react";
import { render, screen } from "@testing-library/react";
import DishwasherListItem from "./DishwasherListItem";
import { Dishwasher } from "../DishwasherList/DishwashersList";

describe("DishwasherListItem", () => {
    const boschDishwasher: Dishwasher = {
        productId: "1955287",
        price: {
            now: "397.00",
        },
        title: "Bosch Serie 2 SMV40C30GB Fully Integrated Dishwasher",
        image: "//johnlewis.scene7.com/is/image/JohnLewis/234378764?",
    };

    it("should contain link to the details page", () => {
        render(<DishwasherListItem dishwasher={boschDishwasher} />);

        expect(screen.getByRole("link")).toHaveAttribute("href", "/dishwasher/1955287");
    });
});
