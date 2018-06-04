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

    getData(value) {

        return new Promise((resolve, reject) => {

            let searchResults = [];

            const xhr = new XMLHttpRequest();
            xhr.open('GET', `/api/library?structure=${value.replace(/^"|"$/g, '')}&length=5`);

            xhr.onloadend = () => {
            
                const books = JSON.parse(xhr.responseText);

                const filteredBooks = books.filter(book => {

                    return value.length != 0;
                });
        
                for(const result of books) {
                    searchResults.push(result);
                }

                resolve(searchResults);
            }

            xhr.onerror = () => {

                reject("Error from Client-side");
            }

            xhr.send();

        });
    }

    searchBarOnChange(value) {

        this.getData(value).then(
        
            result => {

                if(value.length <= 0) {

                    $(".result-pane").fadeOut(() => {

                        this.setState({
                            books: []
                        });
                    });

                } else {

                    $(".result-pane").fadeIn(() => {

                        this.setState({
                            books: result
                        });
                    });
                }
            }, 
            reason => {
                console.log(reason);
            }
        );
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