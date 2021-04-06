import { placeOrderHandler } from "handlers";

test("sends snowplow event", () => {
    placeOrderHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "checkout",
        "place-order",
        "<orderId>",
        "<pageType>",
        0,
        undefined,
    );
});
