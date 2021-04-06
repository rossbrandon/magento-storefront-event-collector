import { shoppingCartViewHandler } from "handlers";

test("sends snowplow event", () => {
    shoppingCartViewHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "shopping-cart",
        "view",
        undefined,
        "<pageType>",
        0,
        undefined,
    );
});
