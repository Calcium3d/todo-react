import React from 'react'

function header() {
    return (
        <header style={headerstyle}>
            <h1>
                TodoList
            </h1>
        </header>
    )
}

const headerstyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default header
