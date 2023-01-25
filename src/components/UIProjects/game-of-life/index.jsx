import { useState, useEffect } from "react";

export default function GameOfLife() {
    const [grid, setGrid] = useState([])
    const [running, setRunning] = useState(false)
    
    useEffect(() => {
        const rows = 30
        const cols = 50
        setGrid(createGrid(rows, cols))
    }, [])

    const createGrid = (rows, cols) => {
        const grid = []
        for (let i = 0; i < rows; i++) {
            grid[i] = []
            for (let k = 0; k < cols; k++) {
                grid[i][k] = 0
            }

        }
    }
    
    return (
        <div>

            <button onClick={() => setRunning(!running)}>
                {running ? 'stop' : 'start'}
            </button>

            {
                grid?.map((rows, i) =>
                    rows.map((col, k) =>
                        <div
                            key={`${i}-${k}`}
                            onClick={() => {
                                const newGrid = grid.slice()
                                newGrid[i][k] = grid[i][k] ? 0 : 1
                                setGrid(newGrid)
                            }}
                            style={{
                                width: 20,
                                height: 20,
                                backgroundColor: grid[i][k] ? 'pink' : undefined,
                                border: 'solid 1px black'
                            }}
                        />
                    )
                )


            }
        </div>
    )
}