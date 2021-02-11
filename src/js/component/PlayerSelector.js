import React, { Component } from "react";
import { PropTypes } from "prop-types";

export class PlayerSelector extends Component {
	constructor(props) {
		super();
		this.player1 = null;
		this.player2 = null;
	}

	render() {
		return (
			<div className="players">
				<h1>Choose your weapon</h1>
				<div>
					<input
						className="p1"
						placeholder="player 1"
						onChange={event =>
							(this.player1 = event.target.value)
						}></input>

					<input
						className="p2"
						placeholder="player 2"
						onChange={event =>
							(this.player2 = event.target.value)
						}></input>
				</div>
				<div className="row weapon">
					<div className="col-3"></div>
					<button
						className=" col-3 btn btn-info rounded-pill text-center"
						onClick={() =>
							this.props.onSetTurn("X", this.player1, this.player)
						}>
						<h2>X</h2>
					</button>
					<button
						className="col-3 btn btn-info rounded-pill text-center"
						onClick={() =>
							this.props.onSetTurn(
								"O",
								this.player1,
								this.player2
							)
						}>
						<h2>O</h2>
					</button>
					<div className="col-3"></div>
				</div>
			</div>
		);
	}
}

PlayerSelector.propTypes = {
	onSetTurn: PropTypes.funct
};
