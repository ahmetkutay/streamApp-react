import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./stream/StreamList";
import StreamCreate from "./stream/StreamCreate";
import StreamEdit from "./stream/StreamEdit";
import StreamDelete from "./stream/StreamDelete";
import StreamShow from "./stream/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact={true} component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
