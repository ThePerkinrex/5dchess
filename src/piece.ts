//piezas
export enum PieceKind {
	Pawn,
	Bishop,
	Knight,
	Rook,
	Queen,
	King
}

//♔ ->  King
//♕ -> queen
//♖ -> rook
//♗ -> bishop
//♘ -> knight
//♙ -> pawn

//color
export enum PieceColor {
	Black, White
}

export interface Piece {
	kind: PieceKind,
	color: PieceColor,
	firstMove: boolean,
}

//las letras representan las piezas q en la pag se vev con los png´s que corresponden ej k = ./public/pieces/king.png
export function getImagePath(p: Piece): string {
	let kind_letter: string;
	switch (p.kind) {
		case PieceKind.King:
			kind_letter = 'k'
			break;

		case PieceKind.Queen:
			kind_letter = 'q'
			break;

		case PieceKind.Knight:
			kind_letter = 'n'
			break;

		case PieceKind.Rook:
			kind_letter = 'r'
			break;

		case PieceKind.Bishop:
			kind_letter = 'b'
			break;

		case PieceKind.Pawn:
			kind_letter = 'p'
			break;
	}

	let color_letter = 'l'
	if (p.color == PieceColor.Black) {
		color_letter = 'd'
	}

	return `/pieces/Chess_${kind_letter}${color_letter}t45.png`
}