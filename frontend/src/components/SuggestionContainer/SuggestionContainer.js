import React from "react"
import { useSelector } from "react-redux"




function SuggestionContainer() {
    const user = useSelector(state => state.session.user)

    return (
        <div>

        </div>
    )
}


export default SuggestionContainer
