import { Component } from 'react'
import { Searchbar } from './searchbar'
import { ResultPane } from './resultpane'

export class Application extends Component {

    constructor() {
        
        super();

        this.state = {
            books: []
        };
    }

    searchBarOnChange(value) {

        let searchResults = [];

        const xhr = new XMLHttpRequest();
        xhr.open('GET', `/api/library?structure=${value.replace(/^"|"$/g, '')}&length=5`);

        xhr.onload = () => {
            
            const books = JSON.parse(xhr.responseText);

            const filteredBooks = books.filter(book => {

                return book.title.toLowerCase().startsWith(value.toLowerCase()) && value.length > 0;
            });
    
            for(const result of filteredBooks) {
                searchResults.push(result);
            }
    
            this.setState({
                books: searchResults
            });
    
            console.log(searchResults);
        }

        xhr.send();
    }

    componentWillMount() {

    }

    render() {
        
        return (
            <div>
                <Searchbar valueInputted={this.searchBarOnChange.bind(this)} />
                <ResultPane results={this.state.books} />
            </div>
        );
    }
}