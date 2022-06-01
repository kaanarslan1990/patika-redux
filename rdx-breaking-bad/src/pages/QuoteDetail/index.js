import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams,Navigate  } from "react-router-dom";
import Loading from "../../components/Loading";
import "../../App.css"


function QuoteDetail() {
  const { quote_id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const quote = useSelector((state) =>
    state.quotes.items.find((item) => item.quote_id === Number(quote_id))
  );
  if (!quote) {
      return <Navigate to="/quotes" />
  }

  return (
    <div>
      {loading && !<Loading />}
      {quote && (
        <div className="quoteContainer">
          
          <div className="singleQuote">
            
            <h3>Quote:</h3>
            <p>{quote.quote}</p>
            <h3>Author:</h3>            
            <p>{quote.author}</p>
            <h3>Series:</h3>
            <p>{quote.series}</p>
          </div>
        </div>
      )}
      <hr />
      {loading && <button onClick={() => navigate(-1)}>Go back</button>}
    </div>
  );
}

export default QuoteDetail;
