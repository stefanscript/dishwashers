import React from "react";

export interface Product {
    productId: string;
    type: string;
    title: string;
    htmlTitle: string;
    code: string;
    averageRating: number;
    reviews: number;
    price: { uom: string; then2: string; then1: string; now: string; was: string; currency: string };
    image: string;
    displaySpecialOffer: string;
    promoMessages: { offer: string; customSpecialOffer: {}; bundleHeadline: string; reducedToClear: boolean; customPromotionalMessage: string; priceMatched: string };
    nonPromoMessage: string;
    defaultSkuId: string;
    colorSwatches: { basicColor: string; isAvailable: boolean; colorSwatchUrl: string; color: string; imageUrl: string; skuId: string }[];
    colorSwatchSelected: number;
    colorWheelMessage: string;
    outOfStock: boolean;
    emailMeWhenAvailable: boolean;
    availabilityMessage: string;
    compare: boolean;
    fabric: string;
    swatchAvailable: boolean;
    categoryQuickViewEnabled: boolean;
    swatchCategoryType: string;
    brand: string;
    ageRestriction: number;
    isInStoreOnly: boolean;
    isMadeToMeasure: boolean;
    isBundle: boolean;
    isProductSet: boolean;
    promotionalFeatures: any[];
    features: any[];
    dynamicAttributes: any;
    directorate: string;
    futureRelease: boolean;
    multiSku: boolean;
    fabricByLength: boolean;
    quickAddToBasket: { simpleAddToBasket: boolean; showEmailMeTriggerQV: boolean; showChooseSizeTriggerQV: boolean; showPermanentOos: boolean; simpleMobileEmailMe: boolean; showMoreInfoRedirectPDP: boolean };
    permanentOos: boolean;
}

interface Props {
    products?: Product[];
}

const IndexPage: React.FC<Props> = ({ products = [] }) => (
    <>
        <p>No dishwashers available</p>
    </>
);

export default IndexPage;
