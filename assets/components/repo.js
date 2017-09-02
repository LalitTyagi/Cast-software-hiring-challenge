import React from 'react';
import { NavLink } from 'react-router-dom';
import {Bootstrap, Grid, Row, Col, Clearfix, Table, FormControl, FormGroup} from 'react-bootstrap';
import {Navbar, NavItem, Nav, Button} from 'react-bootstrap';
var $ = require('jquery');

module.exports = React.createClass({
	getInitialState: function() {
    console.log('Get InitialState')
        return {
            topic:this.props.location.state.lang,
            results:[],
            id0:'',
            id1:'',
            id2:'',
            id3:'',
            id4:'',
            id5:'',
            id6:'',
            id7:'',
            id8:'',
            pythonTotal : 0,
	        javaTotal : 0,
	        javascriptTotal : 0,
	        cTotal : 0,
	        cppTotal : 0,
	        rubygoTotal : 0,
	        goTotal:0,
	        phpTotal : 0,
	        htmlTotal : 0 
      
        }
    },
    componentDidMount:function()
    {
    	console.log("topic_componentDidMount",this.state.topic)
    	$.ajax({
            type: "GET",
            dataType: 'json',
            url:'https://api.github.com/search/repositories?q=' + this.state.topic,
            success: function(response)
	            {
	            	console.log("response",response)
	            	this.setState({
                       results: response.items,
                       id0: response.items[0].owner.login,
                       id1: response.items[1].owner.login,
			           id2: response.items[2].owner.login,
			           id3: response.items[3].owner.login,
			           id4: response.items[4].owner.login,
			           id5: response.items[5].owner.login,
			           id6: response.items[6].owner.login,
			           id7: response.items[7].owner.login,
			           id8: response.items[8].owner.login
			           
                    })
	            }.bind(this)
            });
    	$.ajax({
            type: "GET",
            dataType: 'json',
            url:'https://api.github.com/search/repositories?q=python',
            success: function(response)
	            {
	            	console.log("response",response)
	            	this.setState({
                       pythonTotal: response.total_count
                       })
	            }.bind(this)
            });
    	$.ajax({
            type: "GET",
            dataType: 'json',
            url:'https://api.github.com/search/repositories?q=java',
            success: function(response)
	            {
	            	console.log("response",response)
	            	this.setState({
                       javaTotal: response.total_count
                       })
	            }.bind(this)
            });
    	$.ajax({
            type: "GET",
            dataType: 'json',
            url:'https://api.github.com/search/repositories?q=javascript',
            success: function(response)
	            {
	            	console.log("response",response)
	            	this.setState({
                       javascriptTotal: response.total_count
                       })
	            }.bind(this)
            });
    	$.ajax({
            type: "GET",
            dataType: 'json',
            url:'https://api.github.com/search/repositories?q=c',
            success: function(response)
	            {
	            	console.log("response",response)
	            	this.setState({
                       cTotal: response.total_count
                       })
	            }.bind(this)
            });
    	$.ajax({
            type: "GET",
            dataType: 'json',
            url:'https://api.github.com/search/repositories?q=cpp',
            success: function(response)
	            {
	            	console.log("response",response)
	            	this.setState({
                       cppTotal: response.total_count
                       })
	            }.bind(this)
            });
    	$.ajax({
            type: "GET",
            dataType: 'json',
            url:'https://api.github.com/search/repositories?q=ruby',
            success: function(response)
	            {
	            	console.log("response",response)
	            	this.setState({
                       rubyTotal: response.total_count
                       })
	            }.bind(this)
            });
    	$.ajax({
            type: "GET",
            dataType: 'json',
            url:'https://api.github.com/search/repositories?q=php',
            success: function(response)
	            {
	            	console.log("response",response)
	            	this.setState({
                       phpTotal: response.total_count
                       })
	            }.bind(this)
            });
    	$.ajax({
            type: "GET",
            dataType: 'json',
            url:'https://api.github.com/search/repositories?q=html',
            success: function(response)
	            {
	            	console.log("response",response)
	            	this.setState({
                       htmlTotal: response.total_count
                       })
	            }.bind(this)
            });
    },
    handleClick1:function()
    {
    	console.log("This is a handleClick1 Function",this.state.id0)
    	this.props.history.push({
			pathname:'/users/',
			state:{dataId:this.state.id0}
		})

    },
    handleClick2:function()
    {
    	console.log("This is a handleClick2 Function",this.state.id1)
    	this.props.history.push({
			pathname:'/users/',
			state:{dataId:this.state.id1}
		})
    },
    handleClick3:function()
    {
    	console.log("This is a handleClick3 Function",this.state.id2)
    	this.props.history.push({
			pathname:'/users/',
			state:{dataId:this.state.id2}
		})
    },
    handleClick4:function()
    {
    	console.log("This is a handleClick4 Function",this.state.id3)
    	this.props.history.push({
			pathname:'/users/',
			state:{dataId:this.state.id3}
		})
    },
    handleClick5:function()
    {
    	console.log("This is a handleClick5 Function",this.state.id4)
    	this.props.history.push({
			pathname:'/users/',
			state:{dataId:this.state.id4}
		})
    },
    handleClick6:function()
    {
    	console.log("This is a handleClick6 Function",this.state.id5)
    	this.props.history.push({
			pathname:'/users/',
			state:{dataId:this.state.id5}
		})
    },
    handleClick7:function()
    {
    	console.log("This is a handleClick7 Function",this.state.id6)
    	this.props.history.push({
			pathname:'/users/',
			state:{dataId:this.state.id6}
		})
    },
    handleClick8:function()
    {
    	console.log("This is a handleClick8 Function",this.state.id7)
    	this.props.history.push({
			pathname:'/users/',
			state:{dataId:this.state.id7}
		})
    },
    handleClick9:function()
    {
    	console.log("This is a handleClick9 Function",this.state.id8)
    	this.props.history.push({
			pathname:'/users/',
			state:{dataId:this.state.id8}
		})
    },
	render:function(){
		console.log("topic",this.state.topic)
		var topik = this.props.location.state.lang;
		//console.log("results",this.state.results)
		console.log('results',this.state.results.map((value) => (value.full_name)))
		console.log('results_Length',this.state.results.length)

		var style = {
	      color: '#3385ff',
	      fontSize: 20
	    };

		var fName=[];
		var des=[];
		var update=[];
		var watch=[];
		var data = {};

      	this.state.results.map(function(i){
      		fName.push(i.full_name)
      		des.push(i.description)
      		update.push(i.updated_at)
      		watch.push(i.watchers)
      	})

		console.log('render Function')
		return(
			<div>
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
					    <Navbar.Brand>
					        <a href="#">Cast TechScan</a>
					    </Navbar.Brand>
					</Navbar.Header>
					<Navbar.Collapse>
					    <Nav pullRight>  
					    	<NavItem>
					    		<NavLink to="/technologies" activeClassName="active">Technologies</NavLink>
					    	</NavItem>
					    </Nav>
					</Navbar.Collapse>
				</Navbar>
				<Grid>
					<Navbar>
						<Navbar.Form pullLeft>							      
							<input type="text" ref="query" placeholder="Search" />							        
							<Button type="submit" onClick={this.createAjax}>Submit</Button>
						</Navbar.Form>
					</Navbar>
					<Col sm={18} md={9} className="show-grid ">
						<Col sm={24} md={12} className="show-grid ">
								{console.log(fName[0])}
							<Row className="show-grid well">
									<Col sm={12} md={6} className="show-grid ">
										<h3 onClick = {this.handleClick1} style={style}>{fName[0]}</h3>
										<h4>{des[0]}</h4>
										<br/>
										<h5>{update[0]}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>{topik}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>Watcher.:{watch[0]}</h5>
									</Col>
							</Row>
							<hr size="20"/>
							<Row className="show-grid well">
									<Col sm={12} md={6} className="show-grid ">
										<h3 onClick = {this.handleClick2} style={style}>{fName[1]}</h3>
										<h4>{des[1]}</h4>
										<br/>
										<h5>{update[1]}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>{topik}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>Watcher.:{watch[1]}</h5>
									</Col>
								</Row>
							<hr size="20"/>
							<Row className="show-grid well">
									<Col sm={12} md={6} className="show-grid ">
										<h3 onClick = {this.handleClick3} style={style}>{fName[2]}</h3>
										<h4>{des[2]}</h4>
										<br/>
										<h5>{update[2]}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>{topik}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>Watcher.:{watch[2]}</h5>
									</Col>
								</Row>
							<hr size="20"/>
							<Row className="show-grid well">
									<Col sm={12} md={6} className="show-grid ">
										<h3 onClick = {this.handleClick4} style={style}>{fName[3]}</h3>
										<h4>{des[3]}</h4>
										<br/>
										<h5>{update[3]}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>{topik}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>Watcher.:{watch[3]}</h5>
									</Col>
								</Row>
							<hr size="20"/>
							<Row className="show-grid well">
									<Col sm={12} md={6} className="show-grid ">
										<h3 onClick = {this.handleClick5} style={style}>{fName[4]}</h3>
										<h4>{des[4]}</h4>
										<br/>
										<h5>{update[4]}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>{topik}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>Watcher.:{watch[4]}</h5>
									</Col>
								</Row>
							<hr size="20"/>
							<Row className="show-grid well">
									<Col sm={12} md={6} className="show-grid ">
										<h3 onClick = {this.handleClick6} style={style}>{fName[5]}</h3>
										<h4>{des[5]}</h4>
										<br/>
										<h5>{update[5]}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>{topik}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>Watcher.:{watch[5]}</h5>
									</Col>
								</Row>
							<hr size="20"/>
							<Row className="show-grid well">
									<Col sm={12} md={6} className="show-grid ">
										<h3 onClick = {this.handleClick7} style={style}>{fName[6]}</h3>
										<h4>{des[6]}</h4>
										<br/>
										<h5>{update[6]}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>{topik}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>Watcher.:{watch[6]}</h5>
									</Col>
								</Row>
							<hr size="20"/>
							<Row className="show-grid well">
									<Col sm={12} md={6} className="show-grid ">
										<h3 onClick = {this.handleClick8} style={style}>{fName[7]}</h3>
										<h4>{des[7]}</h4>
										<br/>
										<h5>{update[7]}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>{topik}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>Watcher.:{watch[7]}</h5>
									</Col>
								</Row>
							<hr size="20"/>
							<Row className="show-grid well">
									<Col sm={12} md={6} className="show-grid ">
										<h3 onClick = {this.handleClick9} style={style}>{fName[8]}</h3>
										<h4>{des[8]}</h4>
										<br/>
										<h5>{update[8]}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>{topik}</h5>
									</Col>
									<Col sm={6} md={3} className="show-grid ">
										<h5>Watcher.:{watch[8]}</h5>
									</Col>
								</Row>
						</Col>
					</Col>
					<Col sm={6} md={3} className="show-grid ">
						<Row sm={6} md={3} className="show-grid well">
				    		<h3>Languages</h3>
					    	<Table striped bordered condensed hover>
							    <tbody>
								      <tr>
								        <td>Python</td>
								        <td>{this.state.pythonTotal}</td>
								      </tr>
								      <tr>
								        <td>Java</td>
								        <td>{this.state.javaTotal}</td>
								      </tr>
								      <tr>
								        <td>JavaScript</td>
								        <td>{this.state.javascriptTotal}</td>
								      </tr>
								      <tr>
								        <td>C</td>
								        <td>{this.state.cTotal}</td>
								      </tr>
								      <tr>
								        <td>C++</td>
								        <td>{this.state.cppTotal}</td>
								      </tr>
								      <tr>
								        <td>Ruby</td>
								        <td>{this.state.rubyTotal}</td>
								      </tr>
								      <tr>
								        <td>Go</td>
								        <td>{this.state.goTotal}</td>
								      </tr>
								      <tr>
								        <td>PHP</td>
								        <td>{this.state.phpTotal}</td>
								      </tr>
								      <tr>
								        <td>HTML</td>
								        <td>{this.state.htmlTotal}</td>
								      </tr>
								    </tbody>
							</Table>
				    	</Row>
					</Col>
				</Grid>
				<h2>This is {this.props.location.state.lang}!</h2>
			</div>
			);
	}
})