import React from "react";
import DishwasherDetailsPage, { DishwasherDetails } from "../../../src/pages/dishwasher/[productId]";
import { render, screen} from "@testing-library/react";

describe("Given we are on the Dishwasher Details Page", () => {
    describe("When there is product data", () => {
        const details: DishwasherDetails = {
            title: "Bosch Serie 2 SMS25EW00G Freestanding Dishwasher, White",
        };

        it("Then title should show", () => {
            render(<DishwasherDetailsPage details={details} />);

            expect(screen.getByText("Bosch Serie 2 SMS25EW00G Freestanding Dishwasher, White")).toBeInTheDocument();
        });
    });
});
