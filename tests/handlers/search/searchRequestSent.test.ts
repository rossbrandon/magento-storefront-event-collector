import { searchRequestSentHandler } from "handlers";

test("sends snowplow event", () => {
    searchRequestSentHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "search",
        "api-request-sent",
        "red patns",
        "<pageType>",
        undefined,
        [
            {
                data: {
                    page: 1,
                    perPage: 20,
                    query: "red patns",
                    refinementAttribute: undefined,
                    refinementSelection: undefined,
                    sortOrder: "descending",
                    sortType: "relevance",
                    source: "search-bar",
                },
                schema:
                    "iglu:com.adobe.magento.entity/search-input/jsonschema/1-0-2",
            },
        ],
    );
});
