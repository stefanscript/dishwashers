import React from "react";
import DishwashersList from "./DishwashersList";
import { render, screen } from "@testing-library/react";

describe("DishwashersList List", () => {
    it("should display No dishwashers available", () => {
        render(<DishwashersList dishwashers={[]} />);

        expect(screen.getByText(/No dishwashers available/)).toBeInTheDocument();
    });
});
