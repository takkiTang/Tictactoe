import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Cell(props) {
    return (
        <div className="cell" onClick={props.onClick} >{props.text}</div>
    )
}


function Chessborad() {
    let [cells, setCells] = useState(new Array(3).fill(new Array(3).fill()))
    let [count, setCount] = useState(0)
    let [staus, setStaus] = useState(false)
    let [win, setWin] = useState('')
    const onClickCell = (row, col) => {
        if (!cells[row][col]) {
            setCount(++count)
            const newVal = JSON.parse(JSON.stringify(cells))
            newVal[row][col] = count & 1 ? 'x' : 'o'
            setCells(newVal)
            judge(newVal, row, col, newVal[row][col])
        }
    }
    const judge = (cells, row, col, text) => {
        // 横
        if (cells[row].every(v => v === text)) {
            setStaus(true)
            setWin(text)
            return
        }
        // 竖
        if (cells.every(v => v[col] === text)) {
            setStaus(true)
            setWin(text)
            return

        }
        // 反斜
        if (row - col === 0) {
            let arr = cells.map((items, row) =>
                items.filter((item, col) =>
                    row - col === 0
                )
            ).flat(1)
            if (arr.every(v => v === text)) {
                setStaus(true)
                setWin(text)
                return

            }
        }
        // 正斜
        if (row + col === 2) {
            let arr = cells.map((items, row) =>
                items.filter((item, col) =>
                    row + col === 2
                )
            ).flat(1)
            if (arr.every(v => v === text)) {
                setStaus(true)
                setWin(text)
                return
            }
        }
        if (count === 9) {
            setStaus(true)
            setWin(null)
            return 
        }
    }
    const init = () => {
        setCells(new Array(3).fill(new Array(3).fill()))
        setCount(0)
        setStaus(false)
        setWin('')
    }

    return (
        <div>
            <div className="tip">tic tac toe</div>
            <div className="row">
                {cells.map((items, row) =>
                    <div className="col" key={row + 'row'}>
                        {items.map((item, col) =>
                            <Cell key={col + 'cell'} text={item} onClick={() => onClickCell(row, col)} ></Cell>
                        )}
                    </div>
                )}
            </div>
            {
                staus &&
                <div className="mask">
                    {win && <div >恭喜{win}赢了！</div>}
                    {!win && <div >双方平局</div>}
                    <div className="button" onClick={init}>重新开始</div>
                </div>
            }
        </div>
    )
}



ReactDOM.render(<div><Chessborad></Chessborad>  </div>, document.getElementById('root'));

