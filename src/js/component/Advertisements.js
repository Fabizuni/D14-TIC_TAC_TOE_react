import React, { Component } from "react";
import { PropTypes } from "prop-types";

export class Advertisements extends Component {
	render() {
		const isDraw = this.props.winner === "d";
		return (
			<>
				<div className={this.props.winner ? "visible" : "hidden"}>
					<h2 id="adv">
						{isDraw ? "Nobody" : this.props.winner} Wins!{" "}
						<i className="far fa-2x fa-grin-tongue-wink"></i>
					</h2>
				</div>
				<div className={this.props.showTurn ? "visible" : "hidden"}>
					<h2 id="advShow">It is {this.props.turn} turn!</h2>
				</div>
			</>
		);
	}
}

Advertisements.propTypes = {
	winner: PropTypes.string,
	turn: PropTypes.string,
	showTurn: PropTypes.bool
};
