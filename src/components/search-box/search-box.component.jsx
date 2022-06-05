import React from "react"
import './search-box.style.css'

export const SearchBox = ({ placeHolder, HandleChange }) => {
	return <input className="search" type="search" placeholder={placeHolder} onChange={HandleChange} />
} 