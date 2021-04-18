import { Piece, PieceColor, PieceKind } from "./piece"

// export type BoardFile = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type RangedNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

interface Position {
	timeline: number,
	turn: number,
	file: BoardFile,
	rank: BoardRank
}

export class BoardRank {
	private rank_: RangedNumber

	constructor(n: number) {
		if (checkRanged(n)) {
			this.rank_ = n
		} else {
			throw new RangeError(`Rank ${n} is out of bounds!`)
		}
	}

    get rank(): RangedNumber {
        return this.rank_
    }

    set rank(n: RangedNumber) {
        if (checkRanged(n)) {
            this.rank_ = n
        } else {
            throw new RangeError(`Rank ${n} is out of bounds!`)
        }
    }
}

export function checkRanged(n: number): n is RangedNumber {
	return Number.isInteger(n) && n>=1 && n<=8
}

export class BoardFile {
	private file_: RangedNumber

	constructor(n: number) {
		if (checkRanged(n)) {
			this.file_ = n
		} else {
			throw new RangeError(`File ${n} is out of bounds!`)
		}
	}

	get file(): RangedNumber {
        return this.file_
    }

    set file(n: RangedNumber) {
        if (checkRanged(n)) {
            this.file_ = n
        } else {
            throw new RangeError(`Rank ${n} is out of bounds!`)
        }
    }

    get fileLetter(): string {
        return String.fromCharCode(this.file_ + 64)
    }

    set fileLetter(n: string) {
        const c = n.charCodeAt(0) - 64
        if (checkRanged(c)) {
            this.file_ = c
        } else {
            throw new RangeError(`File ${n} is out of bounds!`)
        }
    }
}


// MultiverseBoard
interface MultiverseBoard {
	baseTimeline: any
	whiteTimelines: any
	blackTimelines: any
	present: number
}
// BaseBoard
class BaseBoard {
	private inner: Piece[][]

	private constructor(inner: Piece[][]) {
		this.inner = inner
	}
	public initial(): BaseBoard {
		return new BaseBoard(
			[
				[buildPiece(PieceKind.Rook, PieceColor.Black), buildPiece(PieceKind.Knight, PieceColor.Black), buildPiece(PieceKind.Bishop, PieceColor.Black), buildPiece(PieceKind.Queen, PieceColor.Black), buildPiece(PieceKind.King, PieceColor.Black), buildPiece(PieceKind.Bishop, PieceColor.Black), buildPiece(PieceKind.Knight, PieceColor.Black), buildPiece(PieceKind.Rook, PieceColor.Black)],
				[buildPiece(PieceKind.Pawn, PieceColor.Black), buildPiece(PieceKind.Pawn, PieceColor.Black), buildPiece(PieceKind.Pawn, PieceColor.Black), buildPiece(PieceKind.Pawn, PieceColor.Black), buildPiece(PieceKind.Pawn, PieceColor.Black), buildPiece(PieceKind.Pawn, PieceColor.Black), buildPiece(PieceKind.Pawn, PieceColor.Black), buildPiece(PieceKind.Pawn, PieceColor.Black)],
				[null, null, null, null, null, null, null, null],
				[null, null, null, null, null, null, null, null],
				[null, null, null, null, null, null, null, null],
				[null, null, null, null, null, null, null, null],
				[buildPiece(PieceKind.Pawn, PieceColor.White), buildPiece(PieceKind.Pawn, PieceColor.White), buildPiece(PieceKind.Pawn, PieceColor.White), buildPiece(PieceKind.Pawn, PieceColor.White), buildPiece(PieceKind.Pawn, PieceColor.White), buildPiece(PieceKind.Pawn, PieceColor.White), buildPiece(PieceKind.Pawn, PieceColor.White), buildPiece(PieceKind.Pawn, PieceColor.White)],
				[buildPiece(PieceKind.Rook, PieceColor.White), buildPiece(PieceKind.Knight, PieceColor.White), buildPiece(PieceKind.Bishop, PieceColor.White), buildPiece(PieceKind.Queen, PieceColor.White), buildPiece(PieceKind.King, PieceColor.White), buildPiece(PieceKind.Bishop, PieceColor.White), buildPiece(PieceKind.Knight, PieceColor.White), buildPiece(PieceKind.Rook, PieceColor.White)],
			]
		)
	}
}

function buildPiece(kind: PieceKind, color: PieceColor): Piece {
	return { kind, color, firstMove: true }
}