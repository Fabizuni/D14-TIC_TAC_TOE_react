import React from "react";
import { Advertisements } from "./Advertisements.js";
import { RefreshBottom } from "./RefreshBottom.js";
import { Board } from "./Board.js";
import { PlayerSelector } from "./PlayerSelector.js";
import { PropTypes } from "prop-types";

class Tictactoe extends React.Component {
	constructor() {
		super();
		this.state = {
			gameBoard: ["", "", "", "", "", "", "", "", ""],
			turn: "x",
			winner: null
		};
	}

	updateTile(position, player) {
		if (
			this.state.gameBoard[position] === "x" ||
			this.state.gameBoard[position] === "O" ||
			this.state.winner
		) {
			return;
		}

		let currentGameBoard = this.state.gameBoard;
		currentGameBoard.splice(position, 1, this.state.turn);
		this.setState({ gameBoard: currentGameBoard });

		let topRow =
			this.state.gameBoard[0] +
			this.state.gameBoard[1] +
			this.state.gameBoard[2];
		if (topRow.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let middleRow =
			this.state.gameBoard[3] +
			this.state.gameBoard[4] +
			this.state.gameBoard[5];
		if (middleRow.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let bottomRow =
			this.state.gameBoard[6] +
			this.state.gameBoard[7] +
			this.state.gameBoard[8];
		if (bottomRow.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let leftColumn =
			this.state.gameBoard[0] +
			this.state.gameBoard[3] +
			this.state.gameBoard[6];
		if (leftColumn.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let middleColumn =
			this.state.gameBoard[1] +
			this.state.gameBoard[4] +
			this.state.gameBoard[7];
		if (middleColumn.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let rightColumn =
			this.state.gameBoard[2] +
			this.state.gameBoard[5] +
			this.state.gameBoard[8];
		if (rightColumn.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let leftDiagonal =
			this.state.gameBoard[0] +
			this.state.gameBoard[4] +
			this.state.gameBoard[8];
		if (leftDiagonal.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let rightDiagonal =
			this.state.gameBoard[2] +
			this.state.gameBoard[4] +
			this.state.gameBoard[6];
		if (rightDiagonal.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let moves = this.state.gameBoard.join("").replace(/ /g, "");
		if (moves.length === 9) {
			this.setState({ winner: "d" });
		}
		this.setState({ turn: this.state.turn === "x" ? "o" : "x" });
	}

	resetBoard() {
		this.setState({
			gameBoard: ["", "", "", "", "", "", "", "", ""],
			turn: "x",
			winner: null
		});
	}

	render() {
		return (
			<div className="container">
				<div className="menu">
					<h1 id="title"> Tic Tac Toe</h1>
					<PlayerSelector />
					<Advertisements id="advTitle" winner={this.state.winner} />
					<RefreshBottom
						id="refreshBot"
						reset={this.resetBoard.bind(this)}
					/>
				</div>
				{this.state.gameBoard.map(
					function(value, i) {
						return (
							<Board
								key={i}
								position={i}
								value={value}
								updateTile={this.updateTile.bind(this)}
								turn={this.state.turn}
							/>
						);
					}.bind(this)
				)}
			</div>
		);
	}
}

export default Tictactoe;
