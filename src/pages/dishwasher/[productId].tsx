import React from "react";
import PageTitle from "../../components/PageTitle";

export interface DishwasherDetails {
    title: string;
    media: {
        images: {
            altText: string;
            urls: string[];
        };
    }
    price: {
        now: string;
    }
}

interface Props {
    details: DishwasherDetails;
}

const DishwasherDetailsPage: React.FC<Props> = ({ details }) => {
    return (
        <main>
            <PageTitle text={details.title} />
            <img src={details.media.images.urls[0]} alt={details.media.images.altText}/>
        </main>
    );
};

export default DishwasherDetailsPage;
