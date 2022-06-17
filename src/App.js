import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(()=>import('./pages/NewQuote'))
const AllQuotes = React.lazy(()=>import('./pages/AllQuotes'))
const QuoteDetail= React.lazy(()=>import('./pages/QuoteDetail'))
const NotFound=React.lazy(()=>import('./pages/NotFound'))

function App() {

  return (
    <div>
      <Layout>
        <Suspense fallback={<div className="centered"><LoadingSpinner/></div>}>
        <Switch>
          <Route path='/' exact><Redirect to='/quotes' /></Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path='*' ><NotFound/></Route>
        </Switch>
        </Suspense>
      </Layout>

    </div>
  );
}
/*allquotes,quotedetail,addquote */
export default App;
