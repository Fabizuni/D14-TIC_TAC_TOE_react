import React, { Component } from "react";
import PropTypes from "prop-types";

export class Board extends Component {
	boardClick(props) {
		props.updateTile(props.position, props.turn);
	}

	render() {
		return (
			<div
				className={"board " + this.props.position}
				onClick={() => this.boardClick(this.props)}>
				<p>{this.props.value}</p>
			</div>
		);
	}
}

Board.propTypes = {
	value: PropTypes.string,
	position: PropTypes.number
};
