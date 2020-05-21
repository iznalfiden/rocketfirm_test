import React from 'react'
import { useState } from 'react'
import { getSearchPhoto } from '../store/Search/SearchAction'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './SearchForm.css'
import { v4 as uuid } from 'uuid'


function SearchForm() {

    const [value, setValue] = useState("")
    
    const history = useHistory()
    const dispatch = useDispatch()
    
    
    const setToSearchHistory = (randomId, searchHistory) => localStorage.setItem(randomId, searchHistory)

    const handleChange = event => setValue(event.target.value) 

    const handleSubmit = event => {
        history.push("/searched")
        event.preventDefault()
        dispatch(getSearchPhoto(value)) 
        setToSearchHistory('s' + uuid(), value)
    }

    const inputStyle = {
        border: "none",
        background: "none",
        boxShadow: "none",
        color: "white",
        outline: "none",
        fontSize: "12px",
        width: "70px"
    }

    return (
        <form onSubmit={handleSubmit}>
            <input style={inputStyle} value={value} onChange={handleChange} type="search" placeholder="Поиск" />
        </form>
    )
}

export default SearchForm