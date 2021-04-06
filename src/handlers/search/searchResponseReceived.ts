/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { createSearchInputCtx, createSearchResultsCtx } from "contexts";
import { trackEvent } from "snowplow";

const handler = (): void => {
    const searchInputCtx = createSearchInputCtx();
    const searchResultsCtx = createSearchResultsCtx();

    trackEvent({
        category: "search",
        action: "api-response-received",
        label: searchInputCtx.data.query,
        property: "<pageType>",
        contexts: [searchInputCtx, searchResultsCtx],
    });
};

export default handler;
