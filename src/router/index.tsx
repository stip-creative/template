import React, { FunctionComponent } from "react";
import { Switch, Route, /* Redirect */ } from "react-router";


const RootRouter: FunctionComponent = () => (
    <Switch>
        <Route path="/" exact component={() => <div></div>} />
    </Switch>
);

export default RootRouter;
