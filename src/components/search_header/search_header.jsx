import React, { useRef } from 'react';
import Style from './search_header.module.css';

const SearchHeader = ({onSearch}) => {
    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }

    const onClick = () => {
        handleSearch();
    }

    const onKeyPress = event => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }
    
    return (
        <header className={Style.header}>
            <div className={Style.logo}>
                <img src="/logo_youtube.png" alt="logo" className={Style.logoImg}/>
            </div>
            <input ref={inputRef} type="search" className={Style.searchIpt} onKeyPress={onKeyPress} placeholder="Search..."/>
            <button className={Style.searchBtn} onClick={onClick}>go!</button>
        </header>
    )
};

export default SearchHeader;