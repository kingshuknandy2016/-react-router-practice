import {
  Link,
  matchPath,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "./../components/comments/Comments";
import { DummyData } from "./AllQuotes";

const QuoteDetail = () => {
  const match = useRouteMatch();
  //console.log(match);
  const params = useParams();

  const quote = DummyData.find((element) => element.id === params.quoteId);
  if (!quote) {
    return <p>No quote Found</p>;
  }
  return (
    <section>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Route path={matchPath.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </section>
  );
};

export default QuoteDetail;
