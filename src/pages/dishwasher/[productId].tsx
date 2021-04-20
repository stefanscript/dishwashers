import React from "react";
import PageTitle from "../../components/PageTitle";
import DishwasherDetails from "../../components/DishwasherDetails/DishwasherDetails";
import { GetServerSideProps } from "next";
import { PRODUCT_SEARCH_API } from "../index";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { productId } = context.query;
    const response = await fetch(`https://api.johnlewis.com/mobile-apps/api/v1/products/${productId}`);
    const data = await response.json();
    console.log(data);
    return {
        props: {},
    };
};

export default DishwasherDetailsPage;
