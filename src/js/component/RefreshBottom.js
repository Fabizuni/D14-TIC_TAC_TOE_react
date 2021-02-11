/* eslint-disable no-undef */
import React, { Component } from "react";
import { PropTypes } from "prop-types";

export class RefreshBottom extends Component {
	render() {
		return (
			<div>
				<button
					onClick={this.props.reset}
					type="button"
					className="btn btn-lg btn-primary">
					Reset
				</button>
			</div>
		);
	}
}

RefreshBottom.propTypes = {
	reset: PropTypes.string
};
