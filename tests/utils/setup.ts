import "@adobe/adobe-client-data-layer";

import mse from "@adobe/magento-storefront-events-sdk";

import {
    mockExtension,
    mockOrder,
    mockProduct,
    mockRecommendations,
    mockSearchInput,
    mockSearchResults,
    mockShopper,
    mockShoppingCart,
    mockStorefront,
} from "./mocks/data";

window.snowplow = jest.fn();

mse.context.setProduct(mockProduct);
mse.context.setOrder(mockOrder);
mse.context.setShoppingCart(mockShoppingCart);
mse.context.setMagentoExtension(mockExtension);
mse.context.setRecommendations(mockRecommendations);
mse.context.setStorefrontInstance(mockStorefront);
mse.context.setShopper(mockShopper);
mse.context.setSearchInput(mockSearchInput);
mse.context.setSearchResults(mockSearchResults);