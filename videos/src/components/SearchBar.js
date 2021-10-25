import React from "react";

class SearchBar extends React.Component {
    state = { term: ""}

    // call back function that updates search term with users input
    onInputChange = event => {
        this.setState({term : event.target.value})
    };

    // call back function 
    onFormSubmit = event => {
        // make sure browser doesn't automatically submit a form without user submitting it
        event.preventDefault();

        // we call callback from parent component
        this.props.onFormSubmit(this.state.term);

    }

    render() {
        return(
        <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" 
                    onChange={this.onInputChange} 
                    value={this.state.term}/>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;