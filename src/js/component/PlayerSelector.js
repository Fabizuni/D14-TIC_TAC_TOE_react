import React, { Component } from "react";
import { PropTypes } from "prop-types";

export class PlayerSelector extends Component {
	render() {
		return (
			<div className="players">
				<h1>Choose your weapon</h1>
				<div>
					<input className="p1" placeholder="player 1"></input>
					<input className="p2" placeholder="player 2"></input>
				</div>
				<div className="row weapon">
					<div className="col-3"></div>
					<div className="col-3">
						<h2>X</h2>
					</div>
					<div className="col-3">
						<h2>O</h2>
					</div>
					<div className="col-3"></div>
				</div>
			</div>
		);
	}
}
