import Chip from "./Chip"
import { ChipType } from "../types"
import { useState, useEffect } from "react";

export default function InGame({ picked, setPicked, setScore } : { picked: ChipType, setPicked: (chip: ChipType | null) => void, setScore: any }) {
    const signs: ChipType[] = ["rock", "paper", "scissors"]

    const rand = () => signs[Math.floor(Math.random() * 3)];

    const [house, setHouse]: [ChipType | null, any] = useState(null)

    const [counter, setCounter] = useState(3)

    const [result, setResult] = useState("")

    useEffect(()=> {
        if (house) {
            const winCond = {
                "rock": "scissors",
                "scissors": "paper",
                "paper": "rock"
            }
            if (house === picked) {
                setResult("DRAW")
            } else if (house === winCond[picked]) {
                setResult("YOU WIN")
                setScore((prev: number) => prev + 1)
            } else {
                setResult("YOU LOSE")
                setScore(0)
            }
        }
    }, [house])

    useEffect(() => {
        if (counter > 0) {
            const timeout = setTimeout(() => {
                setCounter(prev => prev - 1)
            }, 1000)
            return () => clearTimeout(timeout)
        } else {
            setHouse(rand)
        }
    }, [counter])

    return (
        <main className="ingame">
            <div className={`chip-container ${result === "YOU WIN" ? "win" : ""}`}>
                <p className="chip-text">YOU PICKED</p>
                <Chip type={picked} />
            </div>
            <div className={`endgame-container ${house && "show"}`}>
                <div className="endgame">
                    <h3>{result}</h3>
                    <button onClick={() => setPicked(null)}>PLAY AGAIN</button>
                </div>
            </div>
            <div className={`chip-container ${result === "YOU LOSE" ? "win" : ""}`}>
                <p className="chip-text">THE HOUSE PICKED</p>
                {house && <Chip type={house} />}

            </div>
            {counter != 0 && <h3 className="counter">{counter}</h3>}
        </main>
    )
}