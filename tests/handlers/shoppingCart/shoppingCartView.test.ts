import { trackStructEvent } from "@snowplow/browser-tracker";

import { shoppingCartViewHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import { mockEvent, mockShoppingCartCtx } from "../../utils/mocks";

test("sends snowplow event", () => {
    shoppingCartViewHandler(mockEvent);

    expect(trackStructEvent).toHaveBeenCalledTimes(1);

    expect(trackStructEvent).toHaveBeenCalledWith({
        category: "shopping-cart",
        action: "view",
        property: "pdp",
        value: 0,
        context: [
            {
                data: mockShoppingCartCtx,
                schema: schemas.SHOPPING_CART_SCHEMA_URL,
            },
        ],
    });
});
