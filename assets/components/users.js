import React from 'react';
import { NavLink } from 'react-router-dom';
import {Bootstrap, Grid, Row, Col, Clearfix, Table, FormControl, FormGroup} from 'react-bootstrap';
import {Navbar, NavItem, Nav, Button} from 'react-bootstrap';
var $ = require('jquery');

module.exports = React.createClass({
	getInitialState: function() {
    console.log('Get InitialState',this.props.location.state.dataId )
        return {
        userName:this.props.location.state.dataId ,
        overview : 0,
        repositories : 0,
        stars : 0,
        followers : 0,
        following : 0,
        }
    },
    componentDidMount:function()
    {
    	console.log("componentDidMount")
    	$.ajax({
            type: "GET",
            dataType: 'json',
            url:'https://api.github.com/search/users?q=' + this.state.userName,
            success: function(response)
	            {
	            	console.log("response",response)
	            }.bind(this)
            });
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
				<Grid>
					<Col sm={6} md={3} className="show-grid well">
					</Col>
					<Col sm={18} md={9} className="show-grid ">
						<Row sm={6} md={3} className="show-grid well">
							<Col sm={4} md={2} className="show-grid ">
							<h5>Overview</h5>
							</Col>
							<Col sm={4} md={2} className="show-grid ">
							<h5>Repositorie</h5>
							</Col>
							<Col sm={4} md={2} className="show-grid ">
							<h5>Starts</h5>
							</Col>
							<Col sm={4} md={2} className="show-grid ">
							<h5>Followers</h5>
							</Col>
							<Col sm={4} md={2} className="show-grid ">
							<h5>Following</h5>
							</Col>
						</Row>
						<Row sm={6} md={3} className="show-grid ">
							<Row className="show-grid ">
								<Col sm={12} md={6} className="show-grid well">
								</Col>
								<Col sm={12} md={6} className="show-grid well">
								</Col>
							</Row>
						</Row>
						<Row sm={6} md={3} className="show-grid ">
							<Row className="show-grid ">
								<Col sm={12} md={6} className="show-grid well">
								</Col>
								<Col sm={12} md={6} className="show-grid well">
								</Col>
							</Row>
						</Row>
						<Row sm={6} md={3} className="show-grid ">
							<Row className="show-grid ">
								<Col sm={12} md={6} className="show-grid well">
								</Col>
								<Col sm={12} md={6} className="show-grid well">
								</Col>
							</Row>
						</Row>
					</Col>
				</Grid>
			</div>
			);
	}
})