import React from "react";
import { render, screen } from "@testing-library/react";
import Home, { getStaticProps, PRODUCT_SEARCH_API } from "../../src/pages";
import dishwasherSearchData from "../dishwasherSearchData";
import { Product } from "../../intefaces/Product";

describe("Given we are on the Dishwashers Home Page", () => {
    describe("And there are no dishwashers", () => {
        it("Then we should see a 'no dishwashers available' message", () => {
            render(<Home />);

            expect(screen.getByText(/No dishwashers available/)).toBeInTheDocument();
        });

        it("Then it should display the title", () => {
            render(<Home />);

            expect(screen.getByText("Dishwashers (0)")).toBeInTheDocument();
        });
    });

    describe("And there are dishwashers", () => {
        it("Then we should see the first 20 dishwashers", () => {
            const products: Product[] = dishwasherSearchData.products;

            render(<Home products={products} />);

            expect(screen.getAllByRole("article").length).toEqual(20);
        });

        it("Then it should display the title", () => {
            const products: Product[] = dishwasherSearchData.products;

            render(<Home products={products} />);

            expect(screen.getByText("Dishwashers (24)")).toBeInTheDocument();
        });
    });
});

describe("getStaticProps", () => {
    it("should call the correct api to get the products list", async () => {
        mockFetch(200, {});
        const fetchSpy: any = jest.spyOn(global, "fetch");

        await getStaticProps();

        expect(fetchSpy).toHaveBeenCalledWith(PRODUCT_SEARCH_API);
    });

    it("on success, it should return the products list", async () => {
        mockFetch(200, dishwasherSearchData);

        const result = await getStaticProps();

        expect(result).toEqual({
            props: {
                products: dishwasherSearchData.products,
            },
        });
    });
});

function mockFetch(status: number, response: any) {
    (fetch as any).mockReturnValue(
        Promise.resolve({
            status: status,
            json: () => Promise.resolve(response),
        })
    );
}
