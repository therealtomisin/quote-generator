import React from 'react'



function Quotes({quote, style}) {
    return (
        <div style = {style} className = 'quotes'>
            "{quote}"
        </div>
    )
}

export default Quotes
