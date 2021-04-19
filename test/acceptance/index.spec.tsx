import React from "react";
import { render, screen } from "@testing-library/react";
import Home  from "../../src/pages";
import productResponse from "../dishwashers.data";
import { Product } from "../../intefaces/Product";

describe("Given we are on the Dishwashers Home Page", () => {
    describe("And there are no dishwashers", () => {
        it("Then we should see a 'no dishwashers available' message", () => {
            render(<Home />);

            expect(screen.getByText(/No dishwashers available/)).toBeInTheDocument();
        });
    });

    xdescribe("And there are dishwashers", () => {
        it("Then we should see the first 20 dishwashers", () => {
            const products: Product[] = productResponse.products;

            render(<Home products={products}/>);

            expect(screen.getAllByRole("article").length).toEqual(20);
        });
    });
});


