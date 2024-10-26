import paper from "../assets/images/icon-paper.svg"
import rock from "../assets/images/icon-rock.svg"
import scissors from "../assets/images/icon-scissors.svg"
import { ChipType } from "../types"

export default function Chip({type} : {type : ChipType}) {
    const types = {
        paper,
        rock,
        scissors
    }
    return (
        <div className={`chip chip-${type}`}>
            <div>
                <img src={types[type]} alt="chip" />
            </div>
        </div>
    )
}