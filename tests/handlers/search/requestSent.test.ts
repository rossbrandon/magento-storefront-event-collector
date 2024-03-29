import { trackStructEvent } from "@snowplow/browser-tracker";

import { searchRequestSentHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import { mockEvent, mockSearchInputCtx } from "../../utils/mocks";

test("sends snowplow event", () => {
    searchRequestSentHandler(mockEvent);

    expect(trackStructEvent).toHaveBeenCalledTimes(1);

    expect(trackStructEvent).toHaveBeenCalledWith({
        category: "search",
        action: "api-request-sent",
        label: "red patns",
        property: "pdp",
        context: [
            {
                data: mockSearchInputCtx,
                schema: schemas.SEARCH_INPUT_SCHEMA_URL,
            },
        ],
    });
});
