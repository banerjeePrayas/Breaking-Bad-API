import React from 'react'

const Error = ({ message, color }) => {
    return (
        <div class={color}>
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            {message}
        </div>
    )
}

export default Error
