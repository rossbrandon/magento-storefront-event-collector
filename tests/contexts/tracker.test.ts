import { createTrackerCtx } from "contexts";

import pkg from "../../package.json";

test("creates context", () => {
    const ctx = createTrackerCtx();

    expect(ctx).toEqual({
        data: {
            magentoJsBuild: "0000",
            magentoJsVersion: pkg.version,
        },
        schema:
            "iglu:com.adobe.magento.entity/magento-js-tracker/jsonschema/1-0-0",
    });
});
