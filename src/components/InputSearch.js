import React from "react";

const InputSearch= ({inputSearch, searchHandler})=>{
    return (
        <div className="containerSearch">
            <h1 className="searchText">Search Something</h1>
            <input type="text" value={inputSearch} onChange={searchHandler} placeholder="Search notes..." className="searchInput"/>
        </div>
    )
}

export default InputSearch;