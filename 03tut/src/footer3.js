import React from 'react'

const Footer2 = ({length}) => {
    return (
        <footer>
            <p>{length} List {length!==0 ? "items" : "your list is empty"} </p>
        </footer>
    )
}
export default Footer2
