import { searchResultsViewHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import { mockSearchInputCtx, mockSearchResultsCtx } from "../../utils/mocks";

test("sends snowplow event", () => {
    searchResultsViewHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "search",
        "results-view",
        undefined,
        "<pageType>",
        undefined,
        [
            {
                data: mockSearchInputCtx,
                schema: schemas.SEARCH_INPUT_SCHEMA_URL,
            },
            {
                data: mockSearchResultsCtx,
                schema: schemas.SEARCH_RESULTS_SCHEMA_URL,
            },
        ],
    );
});
