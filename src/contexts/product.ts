/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { Product } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";

const createContext = (product?: Product): ProductContext => {
    const productCtx = product ?? mse.context.getProduct();

    const context = {
        schema: schemas.PRODUCT_SCHEMA_URL,
        data: {
            productId: productCtx.productId,
            name: productCtx.name,
            // TODO: what happens when this is undefined?
            sku: productCtx.sku ?? "",
            topLevelSku: productCtx.topLevelSku,
            specialToDate: productCtx.specialToDate,
            specialFromDate: productCtx.specialFromDate,
            newToDate: productCtx.newToDate,
            newFromDate: productCtx.newFromDate,
            createdAt: productCtx.createdAt,
            updatedAt: productCtx.updatedAt,
            manufacturer: productCtx.manufacturer,
            countryOfManufacture: productCtx.countryOfManufacture,
            categories: productCtx.categories,
            productType: productCtx.productType,
            pricing: {
                // TODO: what happens when these are undefined?
                regularPrice: productCtx.pricing?.regularPrice ?? 0,
                minimalPrice: productCtx.pricing?.minimalPrice ?? 0,
                maximalPrice: productCtx.pricing?.maximalPrice ?? 0,
                specialPrice: productCtx.pricing?.specialPrice,
                tierPricing: productCtx.pricing?.tierPricing.map(price => ({
                    customerGroupId: price.customerGroupId ?? null,
                    qty: price.qty,
                    value: price.value,
                })),
                currencyCode: productCtx.pricing?.currencyCode ?? null,
            },
            canonicalUrl: productCtx.canonicalUrl,
            mainImageUrl: productCtx.mainImageUrl,
        },
    };

    return context;
};

export default createContext;
