import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../src/pages";

describe("Given we are on the Dishwashers Home Page", () => {
    describe("And there are no dishwashers", () => {
        it("Then we should see a 'no dishwashers available' message", () => {
            render(<Home />);

            expect(screen.getByText(/No dishwashers available/)).toBeInTheDocument();
        });
    });
});
