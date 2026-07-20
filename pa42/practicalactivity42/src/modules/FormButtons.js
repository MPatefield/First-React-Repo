import React from 'react'
import './FormButton.css'

const FormButtons = (props) => {
    const value = props.value
    return (
        <div>
            <button onClick={() => props.setJobCategory({value})} type="button" className="tag">{value}</button>
        </div>
    )
}

export default FormButtons
