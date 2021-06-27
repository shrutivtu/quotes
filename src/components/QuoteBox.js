import './Quotebox.css';

const QuoteBox = ({ quote,onAdd }) => {
    return(
        <div className="quoteBox" onClick={onAdd}>
            <h2>{quote}</h2>
        </div>
    )
}

export default QuoteBox;