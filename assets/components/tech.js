import React from 'react';
import { NavLink } from 'react-router-dom';
import {Bootstrap, Grid, Row, Col, Clearfix, Table, FormControl, FormGroup} from 'react-bootstrap';
import {Navbar, NavItem, Nav, Button} from 'react-bootstrap';
var $ = require('jquery');

module.exports = React.createClass({
	getInitialState: function() {
    console.log('Get InitialState')
        return {
	            pythonTotal : 0,
	            javaTotal : 0,
	            javascriptTotal : 0,
	            cTotal : 0,
	            cppTotal : 0,
	            rubygoTotal : 0,
	            goTotal:0,
	            phpTotal : 0,
	            htmlTotal : 0,    
        }
    },
    componentDidMount:function()
    {
    	console.log("topic_componentDidMount",this.state.topic)
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
	c:function()
	{
		console.log("This is c function.")
		this.props.history.push({
			pathname:'/repo/',
			state:{lang:'c'}
		})
	},
	cpp:function()
	{
		console.log("This is cpp function.")
		this.props.history.push({
			pathname:'/repo/',
			state:{lang:'cpp'}
		})
	},
	html:function()
	{
		console.log("This is HTML function.")
		this.props.history.push({
			pathname:'/repo/',
			state:{lang:'html'}
		})
	},
	Java:function()
	{
		console.log("This is Java function.")
		this.props.history.push({
			pathname:'/repo/',
			state:{lang:'java'}
		})
	},
	javascript:function()
	{
		console.log("This is JavaScript function.")
		this.props.history.push({
			pathname:'/repo/',
			state:{lang:'javascript'}
		})
	},
	php:function()
	{
		console.log("This is PHP function.")
		this.props.history.push({
			pathname:'/repo/',
			state:{lang:'php'}
		})
	},
	python:function()
	{
		console.log("This is Python function.")
		this.props.history.push({
			pathname:'/repo/',
			state:{lang:'python'}
		})
	},
	ruby:function()
	{
		console.log("This is Ruby function.")
		this.props.history.push({
			pathname:'/repo/',
			state:{lang:'ruby'}
		})
	},
	render:function(){
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
				<br/>
				<br/>

				<Grid>
					<Col sm={18} md={9} className="show-grid ">
						<Col sm={24} md={12} className="show-grid ">
							<Row className="show-grid well" onClick={this.c}>
								<Col sm={8} md={4} className="show-grid ">
									<img src={"/assets/img/c.jpg"} />
								</Col>
								<Col sm={16} md={8} className="show-grid ">
									<h1>C</h1>
								</Col>
							</Row>
							 <hr size="20"/> 
							<Row className="show-grid well" onClick={this.cpp}>
								<Col sm={8} md={4} className="show-grid ">
									<img src={"/assets/img/cpp.jpg"} />
								</Col>
								<Col sm={16} md={8} className="show-grid ">
									<h1>C++</h1>
								</Col>
							</Row>
							<Row className="show-grid well" onClick={this.html}>
								<Col sm={8} md={4} className="show-grid ">
									<img src={"/assets/img/html.jpg"} />
								</Col>
								<Col sm={16} md={8} className="show-grid ">
									<h1>HTML</h1>
								</Col>
							</Row>
							<Row className="show-grid well" onClick={this.Java}>
								<Col sm={8} md={4} className="show-grid ">
									<img src={"/assets/img/Java.jpg"} />
								</Col>
								<Col sm={16} md={8} className="show-grid ">
									<h1>Java</h1>
								</Col>
							</Row>
							<Row className="show-grid well" onClick={this.javascript}>
								<Col sm={8} md={4} className="show-grid ">
									<img src={"/assets/img/javascript.jpg"} />
								</Col>
								<Col sm={16} md={8} className="show-grid ">
									<h1>JavaScript</h1>
								</Col>
							</Row>
							<Row className="show-grid well" onClick={this.php}>
								<Col sm={8} md={4} className="show-grid ">
									<img src={"/assets/img/php.jpg"} />
								</Col>
								<Col sm={16} md={8} className="show-grid ">
									<h1>PHP</h1>
								</Col>
							</Row>
							<Row className="show-grid well" onClick={this.python}>
								<Col sm={8} md={4} className="show-grid ">
									<img src={"/assets/img/python.jpg"} />
								</Col>
								<Col sm={16} md={8} className="show-grid ">
									<h1>Python</h1>
								</Col>
							</Row>
							<Row className="show-grid well" onClick={this.ruby}>
								<Col sm={8} md={4} className="show-grid ">
									<img src={"/assets/img/ruby.jpg"} />
								</Col>
								<Col sm={16} md={8} className="show-grid ">
									<h1>Ruby</h1>
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
			</div>
			);
	}
})