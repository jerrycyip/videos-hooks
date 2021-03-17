import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        
        // callback from parent company
        this.props.onSearchSubmit(this.state.term);

    };


    render() {
        return (
            <div className="search-bar ui segment" style={{marginTop:"1em", marginBottom:"1em"}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label><h4>Video Search</h4></label>
                    <input type="text" 
                    value={this.state.term} 
                    onChange={this.onInputChange}
                    />
                </div>
                </form>
                </div>
        );
    }
}

export default SearchBar;