import React from 'react';
import ReactDOM from 'react-dom';

import Index from './components/index.js';

var Main = React.createClass({
	render:function(){
		return(
			<div>
				<Index/>
			</div>
			);
	}
});

ReactDOM.render(<Main />, document.getElementById('app'))