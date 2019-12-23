import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Cell(props) {
    return (
        <div className="cell" onClick={props.onClick} >{props.view}</div>
    )
}

function Mask() {
    return (
        <div className="mask">
            <div >恭喜x赢了！</div>
            <div className="button">重新开始</div>
        </div>
    )
}

function Chessborad() {
    let [cells, setCells] = useState(new Array(3).fill(new Array(3).fill()))
    let [count, setCount] = useState(0)
    let [staus, setStaus] = useState(false)
    const onClickCell = (row, col) => {
        if (!cells[row][col]) {
            setCount(++count)
            const newVal = JSON.parse(JSON.stringify(cells))
            newVal[row][col] = count & 1 ? 'x' : 'o'
            setCells(newVal)
            judge(row,col)
        }
    }
    const judge = (row,col) => {
        for(let i=0;i<cells.length;i++){
            const  [a,b,c]
        }
    }
    return (
        <div>
        <div className="tip">双人井字棋</div>
            <div className="row">
                {cells.map((items, row) =>
                    <div className="col" key={row + 'row'}>
                        {items.map((item, col) =>
                            <Cell key={col + 'cell'} view={item} onClick={() => onClickCell(row, col)} ></Cell>
                        )}
                    </div>
                )}
            </div>
            <div>{staus && <Mask></Mask>}</div>
        </div>
    )
}



ReactDOM.render(<div><Chessborad></Chessborad>  </div>, document.getElementById('root'));

