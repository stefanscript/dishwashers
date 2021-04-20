import React from "react";
import { DishwasherDetailsInterface } from "../../pages/dishwasher/[productId]";
import styles from "./dishwasherdetails.module.css";

interface Props {
    details: DishwasherDetailsInterface;
}

const DishwasherDetails: React.FC<Props> = ({ details }) => {
    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <img src={details.media.images.urls[0]} alt={details.media.images.altText} />
            </div>
            <div className={styles.separator} />
            <div className={styles.wrapper}>
                <div className={styles.price}>&pound;{details.price.now}</div>
                <div className={styles.offer}>{details.displaySpecialOffer}</div>
                <div>{details.additionalServices.includedServices}</div>
                <div className={styles.productInfo}>
                    <h2>Product Information</h2>
                    <div dangerouslySetInnerHTML={{ __html: details.details.productInformation }} />
                    <div>Product code: {details.code}</div>
                </div>

                <div>
                    <h2 className={styles.specTitle}>Product Specification</h2>
                    <ul className={styles.specList}>
                        {details.features.map((spec) => (
                            <li key={spec.name} className={styles.specListItem}>
                                <div>{spec.name}</div>
                                &nbsp;
                                <div>{spec.value}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DishwasherDetails;
