import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header.js";
import Content from "../components/Content.js";
import Progsinglepage from "../components/Progsinglepage.js";
import Websinglepage from "../components/Websinglepage.js";
import Mediasinglepage from "../components/Mediasinglepage.js";
import Footer from "../components/Footer.js"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Content}></Route>
        <Route path='/prog/:id' component={Progsinglepage}></Route>
        <Route path='/web/:id' component={Websinglepage}></Route>
        <Route path='/media/:id' component={Mediasinglepage}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
