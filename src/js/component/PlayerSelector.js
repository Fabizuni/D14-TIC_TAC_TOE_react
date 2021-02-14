import React, { Component } from "react";
import { PropTypes } from "prop-types";

export class PlayerSelector extends Component {
	constructor(props) {
		super();
	}

	render() {
		const {
			onInputChange,
			onWeaponSelect,
			p1,
			p2,
			weaponSelector
		} = this.props;

		if (weaponSelector && p1 && p2) return null;

		return (
			<div className="players">
				<h1>Choose your weapon</h1>
				<div>
					<input
						value={p1}
						name="p1"
						onChange={onInputChange}
						className="p1"
						placeholder="player 1"></input>

					<input
						value={p2}
						name="p2"
						onChange={onInputChange}
						className="p2"
						placeholder="player 2"></input>
				</div>
				<div className="row weapon">
					<div className="col-3"></div>
					<button
						onClick={() => {
							onWeaponSelect("x");
						}}
						className=" col-3 btn btn-info rounded-pill text-center">
						<h2>X</h2>
					</button>
					<button
						onClick={() => {
							onWeaponSelect("o");
						}}
						className="col-3 btn btn-info rounded-pill text-center">
						<h2>O</h2>
					</button>
					<div className="col-3"></div>
				</div>
			</div>
		);
	}
}

PlayerSelector.propTypes = {
	onInputChange: PropTypes.func,
	onWeaponSelect: PropTypes.func,
	p1: PropTypes.string,
	p2: PropTypes.string,
	weaponSelector: PropTypes.string
};
