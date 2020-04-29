import React, { Fragment } from 'react'

const Search = ({ search: { onInputChange, onSubmit, searchField } }) => {
    return (
        <Fragment>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="searchbox">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search for a country..." onChange={(e) => onInputChange(e.target.value)} value={searchField} title="search" />
                </div>
            </form>
        </Fragment>
    )
}

export default Search;
