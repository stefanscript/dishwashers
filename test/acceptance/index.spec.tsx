import React from "react";
import {render, screen} from "@testing-library/react";
import Home from "../../src/pages";

describe("Index", () => {
    it("prints Hello", () => {
        render(<Home />);

        expect(screen.getByText("Hello")).toBeInTheDocument();
    });
});
