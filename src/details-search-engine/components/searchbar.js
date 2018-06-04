import { Component } from 'react'

export class Searchbar extends Component {

    valueInputted() {

        this.props.valueInputted(this.refs.searchinput.value);
    }

    render() {

        return (
            <div className="search-area">
                <p className="header-mid">Search for Books </p>
                <input ref="searchinput" type="text" name="search" placeholder="Books....." onChange={this.valueInputted.bind(this)}/>
                <input className="rounded-button-sm" type="submit" role="button" value="Search" />
            </div>
        );
    }
}

