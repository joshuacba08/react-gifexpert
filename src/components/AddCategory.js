import React, { useState } from 'react'
import '../index.css'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length >2 ){
            setCategories(cats => [inputValue, ...cats,]);
            setinputValue('');
        }    
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type = "text"
                value = {inputValue}
                placeholder = "Ingresá el nombre del Gif que querés ver"
                onChange = {handleInputChange}
            />                
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
