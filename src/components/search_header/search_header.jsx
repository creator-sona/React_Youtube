import React, { useRef, memo } from 'react';
import Style from './search_header.module.css'

const SearchHeader = memo(
    ({ onSearch }) => {
        const schIptRef = useRef();
    
        const handleSearch = () => {
            const value = schIptRef.current.value;
            onSearch(value);
        }
    
        const onKeyPress = event => {
            if (event.key === 'Enter') {
                handleSearch();
            }
        }
    
        const onClick = event => {
            handleSearch();
        }
    
        return(
            <header className={Style.header}>
                <img className={Style.logo} src="./img/logo_youtube.png" alt="logo"/>
                <input ref={schIptRef} className={Style.schIpt} type="search" placeholder="Search..." onKeyPress={onKeyPress}/>
                <button className={Style.schBtn} onClick={onClick}>GO</button>
            </header>
        )
    }
);

export default SearchHeader;