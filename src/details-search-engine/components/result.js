
export const Result = (props) => (
    
    <li className="result-item">
        <a href={"/details?book_id=" + props.id}>
            <img src={"/image/" + props.image} className="result-image lefter" />
        </a>
        <ul className="lefter">
            <li><span className="result-title">Title : </span>{props.title}</li>
            <li><span className="result-title">Author : </span>{props.author}</li>
            <li><span className="result-title">Binding : </span>{props.binding}</li>
            <li><span className="result-title">Price : </span>{props.price}</li>
        </ul>

        <span type="submit" className="lefter buy-but"><i className="fas fa-shopping-cart cart-icon"></i></span>
        <div className="clear-fix"></div>
    </li>
);