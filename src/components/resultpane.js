import { Result } from './result'

const getBooks = (props) => {

    let books = props.results.map(result => (
        <Result key={result.id} result={result.title} image={result.image}/>
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