import React, { FC, useState } from 'react';
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";

interface BoardProps {
    board: Board
    setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
    const [selectedCell, setSelectedSell] = useState<Cell | null>(null)

    const click = (cell: Cell) => {
        if (cell.figure) {
            setSelectedSell(cell)
        }
    }

    return (
        <div className="board">
            { board.cells.map((row, index) =>
                <React.Fragment key={ index }>
                    { row.map(cell =>
                        <CellComponent
                            cell={ cell }
                            key={ cell.id }
                            selected={ cell.x === selectedCell?.x && cell.y === selectedCell?.y }
                            click={click}
                        />
                    ) }
                </React.Fragment>
            ) }
        </div>
    )
}
export default BoardComponent;