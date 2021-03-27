import React, { useState } from 'react';

const SearchBar = ( {onSearchSubmit} ) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        
        // callback from parent component
        onSearchSubmit(term);
    };
return (
    <div className="search-bar ui segment" style={{marginTop:"1em", marginBottom:"1em"}}>
        <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
            <label><h4>Video Search</h4></label>
            <input type="text" 
            value={term} 
            onChange={(e) => setTerm(e.target.value)}
            />
        </div>
        </form>
        </div>
    );
};

export default SearchBar;