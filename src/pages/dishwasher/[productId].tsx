import React from "react";
import PageTitle from "../../components/PageTitle";
import DishwasherDetails from "../../components/DishwasherDetails/DishwasherDetails";
import { GetServerSideProps } from "next";
import Link from "next/link";
import BackIcon from "../../components/BackIcon";
import PageTopBar from "../../components/PageTopBar";

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
            <PageTopBar>
                <Link href={"/"}>
                    <a><BackIcon /></a>
                </Link>
                <PageTitle text={details.title} />
            </PageTopBar>
            <DishwasherDetails details={details} />
        </main>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { productId } = context.query;
    const response = await fetch(`https://api.johnlewis.com/mobile-apps/api/v1/products/${productId}`);
    const data = await response.json();
    const details: DishwasherDetailsInterface = {
        title: data.title,
        media: {
            images: data.media.images,
        },
        price: {
            now: data.price.now,
        },
        details: {
            productInformation: data.details.productInformation,
        },
        features: data.details.features[0].attributes.map((attribute: { name: string; value: string }) => ({
            name: attribute.name,
            value: attribute.value,
        })),
        additionalServices: {
            includedServices: data.additionalServices.includedServices[0],
        },
        code: data.code,
        displaySpecialOffer: data.displaySpecialOffer,
    };
    return {
        props: {
            details,
        },
    };
};

export default DishwasherDetailsPage;
