import React, { Component } from "react";
import { PropTypes } from "prop-types";

export class Advertisements extends Component {
	render() {
		return (
			<div className={this.props.winner ? "visible" : "hidden"}>
				<h2 id="adv">Game Over!</h2>
			</div>
		);
	}
}

Advertisements.propTypes = {
	winner: PropTypes.string
};
