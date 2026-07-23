import React, { useState } from 'react'

const CategorySelector = () => {
    // A lookup table: each key is a category name, and its value is a
    // ready-made style object matching React's style prop format
    // (an object of CSS properties, not a plain CSS string).
    // "default" represents "nothing meaningfully selected" styling.
    const categoryStyles = {
        readEmails: { backgroundColor: 'orange' },
        sendEmails: { backgroundColor: 'yellow' },
        webParsing: { backgroundColor: 'blue' },
        default: { backgroundColor: 'white' }
    };

    // Tracks which single category is currently selected, as a plain string.
    // Starts as "default" so nothing appears selected initially, and this
    // value doubles as a direct key into categoryStyles.
    const [category, setCategory] = useState("default");

    // Answers a general question: "has the user picked a REAL category yet,
    // or are we still sitting on the default/unselected state?"
    // Different from checking one specific button — this is a broader check
    // useful for things like disabling a "Confirm" button until something's chosen.
    const validateCategory = () => {
        return category !== 'default';
    }

    return (
        <div>
            {/* Each button:
                - On click, sets "category" to its own name (e.g. "readEmails").
                  Since category is a single string (not an array), selecting
                  one automatically "deselects" whichever was picked before —
                  that's what naturally enforces "only one selected at a time."
                - Its own inline style is chosen with a ternary: if THIS button's
                  category matches the current selection, use its own colour
                  from categoryStyles; otherwise, fall back to the default (white). */}
            <button
                style={category === "readEmails" ? categoryStyles.readEmails : categoryStyles.default}
                onClick={() => setCategory("readEmails")}>
                Read Emails
            </button>

            <button
                style={category === "sendEmails" ? categoryStyles.sendEmails : categoryStyles.default}
                onClick={() => setCategory("sendEmails")}>
                Send Emails
            </button>

            <button
                style={category === "webParsing" ? categoryStyles.webParsing : categoryStyles.default}
                onClick={() => setCategory("webParsing")}>
                Web Parsing
            </button>
        </div>
    )
}

export default CategorySelector