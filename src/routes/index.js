import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    Home,
    Blog,
    Login,
    BlogPost,
} from '../pages';
import { ProtectedRoute } from "../components/atoms/protectedRoute";
import { useState } from 'react';

export const Routes = () => {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            {/*<ProtectedRoute path="/blog/:id" component={BlogPost} isAuth={isAuth} />*/}
            <Route path="/blog/:id" component={BlogPost}/>
            <Route path="/blog" component={Blog}></Route>
            <Route path="/login" component={Login}></Route>
        </Switch>
    );
}
