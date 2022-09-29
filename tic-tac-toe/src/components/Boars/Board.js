import Square from "../Square/Square";
import './Board.css';

const Board = ( {squares, onClick, turn, winningSquares } )=>{

    const createSqured = values => (
        values.map( value => (
            <Square 
            winner={winningSquares.includes(values)}
            turn={turn}
            onClick={() => onClick(value)}
            value={squares[value]}
            key={`square_${value}`}
            />
        ))
    )

    return(
        <div className="board">
            <div className="row">
                {createSqured([0,1,2])}
            </div>
            <div className="row">
            {createSqured([3,4,5])}
            </div>
            <div className="row">
            {createSqured([6,7,8])}
            </div>
        </div>
    );

};

export default Board;