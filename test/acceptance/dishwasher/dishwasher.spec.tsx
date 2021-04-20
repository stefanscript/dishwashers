import React from "react";
import DishwasherDetailsPage, {
    DishwasherDetailsInterface,
    getServerSideProps,
} from "../../../src/pages/dishwasher/[productId]";
import { render, screen } from "@testing-library/react";
import { mockFetch } from "../../utils";
import { GetServerSidePropsContext } from "next";
import dishwasherDetailsData from "../../dishwasherDetailsData";
import userEvent from "@testing-library/user-event/dist";
import * as nextRouter from "next/router";

describe("Given we are on the Dishwasher Details Page", () => {
    const details: DishwasherDetailsInterface = {
        title: "Bosch Serie 2 SMS25EW00G Freestanding Dishwasher, White",
        media: {
            images: {
                altText: "Buy Bosch Serie 2 SMS25EW00G Freestanding Dishwasher, White Online at johnlewis.com",
                urls: [
                    "//johnlewis.scene7.com/is/image/JohnLewis/237026151?",
                    "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt1?",
                    "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt2?",
                    "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt3?",
                    "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt4?",
                    "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt5?",
                    "//johnlewis.scene7.com/is/image/JohnLewis/237026151alt10?",
                ],
            },
        },
        price: {
            now: "379.00",
        },
        details: {
            productInformation: "<p>The Bosch Info here</p>",
        },
        features: [
            { name: "Delay Start", value: "Yes - up to 24 hours" },
            { name: "Program Sequence Indicator", value: "Yes" },
            { name: "Delicate Wash", value: "Yes" },
        ],
        additionalServices: {
            includedServices: "2 year guarantee included",
        },
        code: "81701226",
        displaySpecialOffer: "Save £60 (price includes saving)",
    };

    describe("When there is product data", () => {
        it("Then title should show", () => {
            render(<DishwasherDetailsPage details={details} />);

            expect(screen.getByText("Bosch Serie 2 SMS25EW00G Freestanding Dishwasher, White")).toBeInTheDocument();
        });

        it("Then the dishwasher details should show", () => {
            render(<DishwasherDetailsPage details={details} />);

            expect(
                screen.getByAltText(
                    "Buy Bosch Serie 2 SMS25EW00G Freestanding Dishwasher, White Online at johnlewis.com"
                )
            ).toHaveAttribute("src", "//johnlewis.scene7.com/is/image/JohnLewis/237026151?");
            expect(screen.getByText("£379.00")).toBeInTheDocument();
            expect(screen.getByText("The Bosch Info here")).toBeInTheDocument();
            expect(screen.getByText("2 year guarantee included")).toBeInTheDocument();
            expect(screen.getByText("Product code: 81701226")).toBeInTheDocument();
            expect(screen.getByText("Save £60 (price includes saving)")).toBeInTheDocument();
            const productSpec = screen.getByText("Product Specification").parentElement!;
            expect(productSpec).toHaveTextContent("Delay Start Yes - up to 24 hours");
            expect(productSpec).toHaveTextContent("Program Sequence Indicator Yes");
            expect(productSpec).toHaveTextContent("Delicate Wash Yes");
        });
    });

    describe("When the user presses the back button", () => {
        it("Then it should return to the home page", () => {
            jest.spyOn(nextRouter, "useRouter").mockReturnValue({
                back: jest.fn(),
                push: jest.fn(() => Promise.resolve()),
                prefetch: jest.fn(() => Promise.resolve()),
            } as any);
            render(<DishwasherDetailsPage details={details} />);

            userEvent.click(screen.getByRole("link"));

            expect(nextRouter.useRouter().push).toHaveBeenCalledWith("/", expect.anything(), expect.anything());
        });
    });
});

describe("getServerSideProps", () => {
    const context: GetServerSidePropsContext = ({
        params: undefined,
        query: { productId: "12345" },
        res: "",
        resolvedUrl: "",
    } as unknown) as GetServerSidePropsContext;

    const details: DishwasherDetailsInterface = {
        title: "John Lewis & Partners JLBIDW1419 Fully Integrated Dishwasher",
        media: {
            images: {
                altText: "Buy John Lewis & Partners JLBIDW1419 Fully Integrated Dishwasher Online at johnlewis.com",
                urls: [
                    "//johnlewis.scene7.com/is/image/JohnLewis/238096018alt1?",
                    "//johnlewis.scene7.com/is/image/JohnLewis/238096018?",
                    "//johnlewis.scene7.com/is/image/JohnLewis/238096018alt2?",
                    "//johnlewis.scene7.com/is/image/JohnLewis/238096018alt3?",
                    "//johnlewis.scene7.com/is/image/JohnLewis/238096018alt4?",
                    "//johnlewis.scene7.com/is/image/JohnLewis/238096018alt10?",
                ],
            },
        },
        price: {
            now: "429.00",
        },
        details: {
            productInformation: "<p>Complete your kitchen with the John Lewis & Partners JLBIDW1419</p>",
        },
        features: [
            {
                name: "Type",
                value: "Integrated",
            },
            {
                name: "Rinse Aid Indicator",
                value: "YES",
            },
            {
                name: "Noise Level",
                value: "46dB",
            },
            {
                name: "Weighted Energy Consumption per 100 cycles for Eco cycle",
                value: "85kWh",
            },
        ],
        additionalServices: {
            includedServices: "3 year guarantee included",
        },
        code: "88700203",
        displaySpecialOffer: "Save £60 (price includes saving)",
    };

    it("should call the correct api to get the products list", async () => {
        mockFetch(200, dishwasherDetailsData);
        const fetchSpy: any = jest.spyOn(global, "fetch");

        await getServerSideProps(context);

        expect(fetchSpy).toHaveBeenCalledWith("https://api.johnlewis.com/mobile-apps/api/v1/products/12345");
    });

    it("on success, it should return the products list", async () => {
        mockFetch(200, dishwasherDetailsData);

        const initProps = await getServerSideProps(context);

        expect(initProps).toEqual({
            props: {
                details: details,
            },
        });
    });
});
