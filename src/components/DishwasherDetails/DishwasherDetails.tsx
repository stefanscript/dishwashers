import React from "react";
import { DishwasherDetailsInterface } from "../../pages/dishwasher/[productId]";

interface Props {
    details: DishwasherDetailsInterface;
}

const DishwasherDetails: React.FC<Props> = ({ details }) => {
    return (
        <>
            <img src={details.media.images.urls[0]} alt={details.media.images.altText} />
            <div>&pound;{details.price.now}</div>
            <div>{details.displaySpecialOffer}</div>
            <div>{details.additionalServices.includedServices}</div>
            <div>
                <h2>Product Information</h2>
                <h3>Product code: {details.code}</h3>
                <div dangerouslySetInnerHTML={{ __html: details.details.productInformation }} />
            </div>
            <div>
                <h2>Product Specification</h2>
                <ul>
                    {details.features.map((spec) => (
                        <li key={spec.name}>
                            <div>{spec.name}</div>
                            &nbsp;
                            <div>{spec.value}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default DishwasherDetails;
