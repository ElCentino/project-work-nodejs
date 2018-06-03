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
        xhr.open('GET', `http://localhost:3000/api/library?structure=${value.replace(/^"|"$/g, '')}&length=5`);

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

        this.setState({
            books: [
               {
                   id: 4545454545, 
                   title: "Some Random Book"
               },
               {
                id: 4545434354545, 
                title: "Some Random Book 2"
               }
            ]
        });
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