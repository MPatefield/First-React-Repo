import React from 'react'
import './FormButton.css'

// A single, reusable category selection button.
// This component doesn't know or care WHAT clicking it actually does —
// it just calls whatever function it's given (onSelect), passing its own value.
// That keeps it flexible: JobForm decides the real behaviour (toggling categories),
// while FormButtons just handles the display and click-forwarding.
const FormButtons = (props) => {
    // Pull the button's own label/category name out of props for convenience
    const value = props.value

    return (
        <div>
            <button
                // When clicked, call the function passed down as "onSelect",
                // handing it this button's own value (e.g. "Read Emails").
                // Wrapped in an arrow function so it only runs ON CLICK,
                // not immediately when the component renders.
                onClick={() => props.onSelect(value)}

                type="button" // Prevents this from accidentally submitting the form it sits inside

                // If this button's own value is currently selected (passed down
                // from JobForm as "isSelected"), apply an extra class for
                // different styling (e.g. a highlighted background colour).
                // Otherwise, just use the default "tag" styling.
                className={props.isSelected ? "tag tag-selected" : "tag"}
            >
                {value}
            </button>
        </div>
    )
}

export default FormButtons