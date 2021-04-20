import React from "react";
import PageTitle from "../../components/PageTitle";
import DishwasherDetails from "../../components/DishwasherDetails/DishwasherDetails";

export interface DishwasherDetailsInterface {
    title: string;
    media: {
        images: {
            altText: string;
            urls: string[];
        };
    };
    price: {
        now: string;
    };
    details: {
        productInformation: string;
    };
    features: { name: string; value: string }[];
    displaySpecialOffer: string;
    additionalServices: {
        includedServices: string;
    };
    code: string;
}

interface Props {
    details: DishwasherDetailsInterface;
}

const DishwasherDetailsPage: React.FC<Props> = ({ details }) => {
    return (
        <main>
            <PageTitle text={details.title} />
            <DishwasherDetails details={details} />
        </main>
    );
};

export default DishwasherDetailsPage;
