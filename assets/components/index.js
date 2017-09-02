import React from 'react';
import { BrowserRouter, Switch, IndexRoute, Router, Route, NavLink } from 'react-router-dom';

import Repo from './repo';
import Tech from './tech';
import User from './users';

module.exports = React.createClass({
	render:function(){
		return(
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Tech} />
	    			<Route path="/repo" component={Repo} />
	    			<Route path="/technologies" component={Tech} />
	    			<Route path="/users" component={User} />
				</Switch>
			</BrowserRouter>
			);
	}
})