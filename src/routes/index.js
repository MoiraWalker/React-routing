import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    About,
    Blog,
    Login,
    Logout,
    BlogPost,
} from '../pages';
import { ProtectedRoute } from "../components/atoms/protectedRoute";
import { useState } from 'react';

export const Routes = () => {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <Switch>
            <Route exact path="/" component={Blog}></Route>
            {/*<ProtectedRoute path="/blog/:id" component={BlogPost} isAuth={isAuth} />*/}
            <Route path="/blog:id" component={BlogPost}/>
            <Route path="/about" component={About}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/logout" component={Logout}></Route>
        </Switch>
    );
}
