import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import Logo from '../components/Logo';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll'
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
	return {
			searchField: state.searchRobots.searchField,
			robots: state.requestRobots.robots,
			isPending: state.requestRobots.isPending,
			error: state.requestRobots.error		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {

	componentDidMount() {
		// console.log(this.props.store.getState());
		this.props.onRequestRobots();
	}

	render(){
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending
			? <h1 className="tc f1">LOADING...</h1>
		 : 
		(
			<div className="tc">
				<Logo/>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
				<ErrorBoundry>
					<CardList robots={filteredRobots}/>
				</ErrorBoundry>
				</Scroll>
			</div>
		); 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);