import { Result } from './result'

const getBooks = (props) => {

    let books = props.results.map(result => (
        <Result key={result.id} id={result.id} title={result.title} image={result.image} author={result.author} price={result.Price} binding={result.binding}/>
    ));

    console.log(props.results);

    return books;
};

export const ResultPane = (props) => {
    
    return (
        <article className="result-pane">
            <ul className="results">
                {getBooks(props)}
            </ul>
        </article>
    );
};